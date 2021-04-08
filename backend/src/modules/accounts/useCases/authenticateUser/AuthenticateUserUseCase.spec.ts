import { AppError } from "../../../../shared/errors/AppError";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { FakeHashProvider } from "../../providers/HashProvider/fakes/FakeHashProvider";
import { FakeUsersRepository } from "../../repositories/fakes/FakeUsersRepository";
import { CreateUserUseCase } from "../createUser/CreateUseUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

let authenticateUserUseCase: AuthenticateUserUseCase;
let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let createUserUseCase: CreateUserUseCase;

describe('Authenticate User', () => {

  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();
    authenticateUserUseCase = new AuthenticateUserUseCase(fakeUsersRepository, fakeHashProvider);
    createUserUseCase = new CreateUserUseCase(fakeUsersRepository, fakeHashProvider);
  });

  it('should be able to authenticate an user', async () => {
    const user: ICreateUserDTO = {
      name: 'Usuario test',
      password: '123456',
      email: 'test@test.com',
      driver_license: '123456',
    }
    await createUserUseCase.execute(user);

    const results = await authenticateUserUseCase.execute({ email: user.email, password: user.password });

    expect(results).toHaveProperty('token');
  });

  it('should not be able to authenticate an nonexistent user', async () => {
    expect(async () => {
      await authenticateUserUseCase.execute({ email: 'false@test.com', password: 'false' });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to authenticate with incorrect password', async () => {
    expect(async () => {
      const user: ICreateUserDTO = {
        name: 'Usuario test 2',
        password: '654321',
        email: 'test2@test.com',
        driver_license: '654321',
      }
      await createUserUseCase.execute(user);

      await authenticateUserUseCase.execute({ email: user.email, password: 'incorrectPassword' });
    }).rejects.toBeInstanceOf(AppError);
  });
});