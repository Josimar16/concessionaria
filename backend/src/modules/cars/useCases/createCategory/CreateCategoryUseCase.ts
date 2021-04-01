import { ICategoriesRepository, ICreateCategoryDTO } from '../../repositories/ICategoriesRepository';

class CreateCategoryUseCase {
  constructor(
    private categoriesRepository: ICategoriesRepository
  ) { }

  public async execute({ name, description }: ICreateCategoryDTO): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("Category already exists!");
    }

    await this.categoriesRepository.create({ name, description });
  };
}

export { CreateCategoryUseCase };
