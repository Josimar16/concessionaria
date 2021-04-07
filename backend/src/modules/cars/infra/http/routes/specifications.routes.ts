import { Router } from 'express';
import { CreateSpecificationController } from '../../../useCases/createSpecifications/CreateSpecificationController';
import { ListSpecificationsController } from '../../../useCases/listSpecifications/ListSpecificationsController';

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
const listSpecificationsController = new ListSpecificationsController();

specificationsRoutes.post('/', createSpecificationController.handle);

specificationsRoutes.get('/', listSpecificationsController.handle)

export { specificationsRoutes }