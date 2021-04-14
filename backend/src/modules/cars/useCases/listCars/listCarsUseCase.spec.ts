import { FakeCarsRepository } from "@modules/cars/repositories/fakes/FakeCarsRepository";
import { ListCarsUseCase } from "./listCarsUseCase";

let listCarsUseCase: ListCarsUseCase;
let fakeCarsRepository: FakeCarsRepository;

describe('List Cars', () => {

  beforeEach(() => {
    fakeCarsRepository = new FakeCarsRepository();
    listCarsUseCase = new ListCarsUseCase(fakeCarsRepository);
  });

  it('should be able to list all available cars', async () => {
    const car = await fakeCarsRepository.create({
      name: 'Car available',
      description: 'Description Car',
      daily_rate: 100,
      license_plate: 'ABC-4321',
      fine_amount: 60,
      brand: 'Brand',
      category_id: 'category',
    });

    const cars = await listCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it('should be able to list all available cars by name', async () => {
    const car = await fakeCarsRepository.create({
      name: 'Car 2',
      description: 'Description Car',
      daily_rate: 100,
      license_plate: 'ABC-4321',
      fine_amount: 60,
      brand: 'Brand',
      category_id: 'category',
    });

    const cars = await listCarsUseCase.execute({
      name: 'Car 2'
    });

    expect(cars).toEqual([car]);
  });

  it('should be able to list all available cars by category', async () => {
    const car = await fakeCarsRepository.create({
      name: 'Car',
      description: 'Description Car',
      daily_rate: 100,
      license_plate: 'ABC-4321',
      fine_amount: 60,
      brand: 'Brand',
      category_id: '12345',
    });

    const cars = await listCarsUseCase.execute({
      category_id: '12345'
    });

    expect(cars).toEqual([car]);
  });

  it('should be able to list all available cars by brand', async () => {
    const car = await fakeCarsRepository.create({
      name: 'Car',
      description: 'Description Car',
      daily_rate: 100,
      license_plate: 'ABC-4321',
      fine_amount: 60,
      brand: 'Brand_test',
      category_id: 'category',
    });

    const cars = await listCarsUseCase.execute({
      brand: 'Brand_test'
    });

    expect(cars).toEqual([car]);
  });
})