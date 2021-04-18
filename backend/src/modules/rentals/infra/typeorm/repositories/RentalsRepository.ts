import { ICreateRentalDTO } from "@modules/rentals/dtos/ICreateRentalDTO";
import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";
import { getRepository, Repository } from "typeorm";
import { Rental } from "../entities/Rental";

class RentalsRepository implements IRentalsRepository {
  private repository: Repository<Rental>;

  constructor() {
    this.repository = getRepository(Rental);
  }

  public async create({ user_id, car_id, expected_return_date }: ICreateRentalDTO): Promise<Rental> {
    const rental = this.repository.create({
      user_id,
      car_id,
      expected_return_date,
      start_date: new Date()
    });
    await this.repository.save(rental);
    return rental;
  }
  public async findOpenRentalByCar(car_id: string): Promise<Rental> {
    const openByCar = await this.repository.findOne({
      car_id,
      end_date: null
    });
    return openByCar;
  }
  public async findOpenRentalByUser(user_id: string): Promise<Rental> {
    const openByUser = await this.repository.findOne({
      user_id,
      end_date: null
    });
    return openByUser;
  }

}

export { RentalsRepository }