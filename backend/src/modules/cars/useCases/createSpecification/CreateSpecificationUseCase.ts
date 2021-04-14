import { inject, injectable } from 'tsyringe';
import { AppError } from '@errors/AppError';
import { ICreateSpecificationDTO, ISpecificationsRepository } from '@modules/cars/repositories/ISpecificationsRepository';
import { Specification } from '@modules/cars/infra/typeorm/entities/Specification';

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject('SpecificationsRepository')
    private specificationsRepository: ISpecificationsRepository
  ) { }

  public async execute({ name, description }: ICreateSpecificationDTO): Promise<Specification> {
    const specificationAlreadyExists = await this.specificationsRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new AppError("Specification already exists!");
    }

    const specification = await this.specificationsRepository.create({ name, description });

    return specification;
  }
}

export { CreateSpecificationUseCase }