import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { ImportCategoryController } from './ImportCategoryController';
import { ImportCategoryUseCase } from './ImportCategoryUseCase';

const categoriesRepository = CategoriesRepository.getInstance();

const createCategoryUseCase = new ImportCategoryUseCase(categoriesRepository);

const importCategoryController = new ImportCategoryController(createCategoryUseCase);

export { importCategoryController }