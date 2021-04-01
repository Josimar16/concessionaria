import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { ImportCategoryController } from './ImportCategoryController';
import { ImportCategoryUseCase } from './ImportCategoryUseCase';

export default (): ImportCategoryController => {

  const categoriesRepository = new CategoriesRepository();

  const createCategoryUseCase = new ImportCategoryUseCase(categoriesRepository);

  const importCategoryController = new ImportCategoryController(createCategoryUseCase);

  return importCategoryController

}