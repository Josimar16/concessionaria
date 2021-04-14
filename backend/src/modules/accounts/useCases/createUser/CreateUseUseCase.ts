import { inject, injectable } from 'tsyringe';
import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';
import { User } from '@modules/accounts/infra/typeorm/entities/User';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { AppError } from '@errors/AppError';
import { IHashProvider } from '@modules/accounts/providers/HashProvider/models/IHashProvider';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider
  ) { }

  async execute({
    name,
    password,
    email,
    driver_license
  }: ICreateUserDTO): Promise<User> {
    const userAlreadyExist = await this.usersRepository.findByEmail(email);

    if (userAlreadyExist) {
      throw new AppError('User already exist!');
    }

    const passwordHash = await this.hashProvider.generateHash(password);

    const user = await this.usersRepository.create({
      name,
      password: passwordHash,
      email,
      driver_license
    });

    return user;
  }
}

export { CreateUserUseCase }