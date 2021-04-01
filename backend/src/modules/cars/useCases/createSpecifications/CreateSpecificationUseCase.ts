import { ICreateSpecificationDTO, ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

class CreateSpecificationUseCase {
  constructor(
    private specificationsRepository: ISpecificationsRepository
  ) { }

  public async execute({ name, description }: ICreateSpecificationDTO): Promise<void> {
    const specificationAlreadyExists = await this.specificationsRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error("Specification already exists!");
    }

    await this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase }