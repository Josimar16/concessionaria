import dayjs from 'dayjs';
import { FakeRentalsRepository } from "@modules/rentals/repositories/fakes/FakeRentalsRepository";
import { AppError } from "@shared/errors/AppError";
import { CreateRentalUseCase } from "./CreateRentalUseCase";
import { FakeDateProvider } from '@modules/rentals/providers/DateProvider/fakes/FakeDateProvider';

let createRentalUseCase: CreateRentalUseCase;
let fakeRentalsRepository: FakeRentalsRepository;
let fakeDateProvider: FakeDateProvider;

describe('Create Rental', () => {
  const dayAdd24Hours = dayjs().add(1, 'day').toDate();

  beforeEach(() => {
    fakeRentalsRepository = new FakeRentalsRepository();
    fakeDateProvider = new FakeDateProvider();
    createRentalUseCase = new CreateRentalUseCase(fakeRentalsRepository, fakeDateProvider);
  });

  it('should be able to create a new rental', async () => {
    const rental = await createRentalUseCase.execute({
      user_id: '12345',
      car_id: '121212',
      expected_return_date: dayAdd24Hours,
    });

    expect(rental).toHaveProperty('id');
    expect(rental).toHaveProperty('start_date');
  });

  it('should not be able to create a new rental if there is another open to the same user', async () => {
    expect(async () => {
      await createRentalUseCase.execute({
        user_id: '12345',
        car_id: '121212',
        expected_return_date: dayAdd24Hours,
      });

      await createRentalUseCase.execute({
        user_id: '12345',
        car_id: '123123',
        expected_return_date: dayAdd24Hours,
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create a new rental if there is another open to the same car', async () => {
    expect(async () => {
      await createRentalUseCase.execute({
        user_id: '12345',
        car_id: '123123',
        expected_return_date: dayAdd24Hours,
      });

      await createRentalUseCase.execute({
        user_id: '54321',
        car_id: '123123',
        expected_return_date: dayAdd24Hours,
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create a new rental with invalid return time', async () => {
    expect(async () => {
      await createRentalUseCase.execute({
        user_id: '123',
        car_id: '654321',
        expected_return_date: dayjs().toDate(),
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});