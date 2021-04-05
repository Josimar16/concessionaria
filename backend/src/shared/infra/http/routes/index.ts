import { Router } from 'express';
import { usersRoutes } from '../../../../modules/accounts/infra/http/routes/users.routes';
import { categoriesRoutes } from '../../../../modules/cars/infra/http/routes/categories.routes';
import { specificationsRoutes } from '../../../../modules/cars/infra/http/routes/specifications.routes';

const router = Router();

router.use('/users', usersRoutes);
router.use('/categories', categoriesRoutes);
router.use('/specifications', specificationsRoutes);

export { router }