import { ICreateCarDTO } from "@modules/cars/dtos/ICreateCarDTO";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { ICarsRepository } from "../ICarsRepository";

class FakeCarsRepository implements ICarsRepository {
  private cars: Car[] = [];

  public async create({
    name,
    description,
    daily_rate,
    fine_amount,
    license_plate,
    brand,
    category_id
  }: ICreateCarDTO): Promise<Car> {
    const car = new Car();

    Object.assign(car, {
      name,
      description,
      daily_rate,
      fine_amount,
      license_plate,
      brand,
      category_id,
    });

    this.cars.push(car);

    return car;
  }

  public async findByLicensePlate(license_plate: string): Promise<Car> {
    const car = this.cars.find(car => car.license_plate === license_plate);
    return car;
  }

  public async findAvailable(category_id?: string, brand?: string, name?: string): Promise<Car[]> {
    const cars = this.cars
      .filter((car) => {
        if (
          car.available === true ||
          ((brand && car.brand === brand) ||
            (category_id && car.category_id === category_id) ||
            (name && car.name === name))
        ) {
          return car;
        }
        return null;
      });
    return cars;
  }

  public async findByID(id: string): Promise<Car> {
    const car = this.cars.find((car) => car.id === id);
    return car;
  }

}

export { FakeCarsRepository }