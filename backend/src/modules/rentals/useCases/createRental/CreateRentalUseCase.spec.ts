import { FakeRentalsRepository } from "@modules/rentals/repositories/fakes/FakeRentalsRepository";
import { AppError } from "@shared/errors/AppError";
import { CreateRentalUseCase } from "./CreateRentalUseCase";

let createRentalUseCase: CreateRentalUseCase;
let fakeRentalsRepository: FakeRentalsRepository;

describe('Create Rental', () => {
  beforeEach(() => {
    fakeRentalsRepository = new FakeRentalsRepository();
    createRentalUseCase = new CreateRentalUseCase(fakeRentalsRepository);
  });

  it('should be able to create a new rental', async () => {
    const rental = await createRentalUseCase.execute({
      user_id: '12345',
      car_id: '121212',
      expected_return_date: new Date(),
    });

    expect(rental).toHaveProperty('id');
    expect(rental).toHaveProperty('start_date');
  });

  it('should not be able to create a new rental if there is another open to the same user', async () => {
    expect(async () => {
      await createRentalUseCase.execute({
        user_id: '12345',
        car_id: '121212',
        expected_return_date: new Date(),
      });

      const rental = await createRentalUseCase.execute({
        user_id: '12345',
        car_id: '123123',
        expected_return_date: new Date(),
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create a new rental if there is another open to the same car', async () => {
    expect(async () => {
      await createRentalUseCase.execute({
        user_id: '12345',
        car_id: '123123',
        expected_return_date: new Date(),
      });

      const rental = await createRentalUseCase.execute({
        user_id: '54321',
        car_id: '123123',
        expected_return_date: new Date(),
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});