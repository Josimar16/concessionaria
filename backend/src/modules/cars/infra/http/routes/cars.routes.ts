import { Router } from 'express';
import { CreateCarController } from '@modules/cars/useCases/createCar/CreateCarController';
import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensureAuthenticated';
import { ensureAdmin } from '@shared/infra/http/middlewares/ensureAdmin';

const carsRouter = Router();
const createCarController = new CreateCarController();

carsRouter.post('/', ensureAuthenticated, ensureAdmin, createCarController.handle);

export { carsRouter }