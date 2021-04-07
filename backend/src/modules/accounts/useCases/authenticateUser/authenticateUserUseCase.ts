import { sign } from "jsonwebtoken";
import { injectable, inject } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { User } from "../../infra/typeorm/entities/User";
import { IHashProvider } from "../../providers/HashProvider/models/IHashProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  email: string;
  password: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider
  ) { }

  public async execute({ email, password }: IRequest): Promise<{ token: string, user: User }> {
    const user = await this.usersRepository.findByEmail(email);
    if (!user) {
      throw new AppError('Email or password incorrect');
    }
    const passwordMatch = await this.hashProvider.compareHash(password, user.password);
    if (!passwordMatch) {
      throw new AppError('Email or password incorrect');
    }
    const token = sign({}, process.env.APP_JWT_SECRET || '', {
      subject: user.id,
      expiresIn: '1d'
    })

    return { token, user }
  }
}

export { AuthenticateUserUseCase }