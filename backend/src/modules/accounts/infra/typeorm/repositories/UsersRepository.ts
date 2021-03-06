import { getRepository, Repository } from 'typeorm';
import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';
import { User } from '../entities/User';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    name,
    password,
    email,
    driver_license,
    id,
    avatar
  }: ICreateUserDTO): Promise<User> {
    const user = this.repository.create({
      name,
      password,
      email,
      driver_license,
      id,
      avatar
    })

    const userCreate = await this.repository.save(user);

    return userCreate;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });

    return user;
  }

  async findByID(id: string): Promise<User> {
    const user = await this.repository.findOne(id);

    return user;
  }
}

export { UsersRepository }
