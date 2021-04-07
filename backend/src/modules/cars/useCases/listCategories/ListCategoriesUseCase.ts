import { inject, injectable } from 'tsyringe';
import { Category } from '../../infra/typeorm/entities/Category';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

@injectable()
class ListCategoriesUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository) { }

  public async execute(): Promise<Category[]> {
    const categories = await this.categoriesRepository.find();
    return categories;
  }
}

export { ListCategoriesUseCase }