import { Router } from 'express';
import multer from 'multer';

import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensureAuthenticated';
import { ensureAdmin } from '@shared/infra/http/middlewares/ensureAdmin';
import uploadConfig from '@config/upload';

import { CreateCarController } from '@modules/cars/useCases/createCar/CreateCarController';
import { ListAvailableCarsController } from '@modules/cars/useCases/listAvailableCars/ListAvailableCarsController';
import { CreateCarSpecificationController } from '@modules/cars/useCases/createCarSpecification/CreateCarSpecificationController';
import { UploadCarImagesController } from '@modules/cars/useCases/uploadCarImages/UploadCarImagesController';

const carsRouter = Router();

const upload = multer(uploadConfig.upload('./tmp/cars'));

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();
const createCarSpecificationController = new CreateCarSpecificationController();
const uploadCarImagesController = new UploadCarImagesController();

carsRouter.post('/', ensureAuthenticated, ensureAdmin, createCarController.handle);
carsRouter.get('/available', listAvailableCarsController.handle)
carsRouter.post('/:id/specifications', ensureAuthenticated, ensureAdmin, createCarSpecificationController.handle);
carsRouter.post('/:id/images', ensureAuthenticated, ensureAdmin, upload.array('images'), uploadCarImagesController.handle);

export { carsRouter }