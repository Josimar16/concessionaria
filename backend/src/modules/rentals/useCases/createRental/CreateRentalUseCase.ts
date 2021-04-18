import { ICreateRentalDTO } from "@modules/rentals/dtos/ICreateRentalDTO";
import { Rental } from "@modules/rentals/infra/typeorm/entities/Rental";
import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";
import { AppError } from "@shared/errors/AppError";

class CreateRentalUseCase {
  constructor(
    private rentalsRepository: IRentalsRepository
  ) { }

  public async execute({
    user_id,
    car_id,
    expected_return_date
  }: ICreateRentalDTO): Promise<Rental> {
    const carUnavailable = await this.rentalsRepository.findOpenRentalByCar(car_id);
    if (carUnavailable) {
      throw new AppError('Car is unavailable');
    }

    const rentalOpenToUser = await this.rentalsRepository.findOpenRentalByUser(user_id);
    if (rentalOpenToUser) {
      throw new AppError('There is a rental in progress for user!');
    }

    const rental = await this.rentalsRepository.create({
      user_id,
      car_id,
      expected_return_date
    })

    return rental;
  }
}

export { CreateRentalUseCase }