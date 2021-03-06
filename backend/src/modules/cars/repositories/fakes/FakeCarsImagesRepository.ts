import { CarImage } from "@modules/cars/infra/typeorm/entities/CarImage";
import { ICarsImagesRepository } from "../ICarsImagesRepository";

class FakeCarsImagesRepository implements ICarsImagesRepository {
  private carImages: CarImage[] = [];

  public async create(car_id: string, image_name: string): Promise<CarImage> {
    const carImage = new CarImage();

    Object.assign(carImage, {
      car_id,
      image_name
    });

    this.carImages.push(carImage);

    return carImage;
  }
}

export { FakeCarsImagesRepository }