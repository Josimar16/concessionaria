import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../infra/typeorm/entities/User";
import { IUsersRepository } from "../IUsersRepository";

class FakeUsersRepository implements IUsersRepository {
  users: User[] = [];

  async create({ driver_license, email, name, password }: ICreateUserDTO): Promise<User> {
    const user = new User();

    Object.assign(user, {
      driver_license, email, name, password
    });

    this.users.push(user);

    return user;
  }

  async findByEmail(email: string): Promise<User> {
    return this.users.find(user => user.email === email);
  }

  async findByID(id: string): Promise<User> {
    return this.users.find(user => user.id === id);
  }
}

export { FakeUsersRepository }