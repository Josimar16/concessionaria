import { Router } from 'express';
import multer from 'multer';
import { ListCategoriesController } from '../../../useCases/listCategories/ListCategoriesController';
import { CreateCategoryController } from '../../../useCases/createCategory/CreateCategoryController';
import { ImportCategoryController } from '../../../useCases/importCategory/ImportCategoryController';
import uploadConfig from '../../../../../config/upload';

const categoriesRoutes = Router();

const uploadFile = multer(uploadConfig.upload('./tmp'));

const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();
const importCategoryController = new ImportCategoryController();

categoriesRoutes.post('/', createCategoryController.handle);

categoriesRoutes.get('/', listCategoriesController.handle);

categoriesRoutes.post('/import', uploadFile.single('file'), importCategoryController.handle);

export { categoriesRoutes };
