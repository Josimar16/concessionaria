import { Router } from 'express';
import { usersRoutes } from '@modules/accounts/infra/http/routes/users.routes';
import { categoriesRoutes } from '@modules/cars/infra/http/routes/categories.routes';
import { specificationsRoutes } from '@modules/cars/infra/http/routes/specifications.routes';
import { authenticateRouter } from '@modules/accounts/infra/http/routes/authenticate.routes';

const router = Router();

router.use('/users', usersRoutes);
router.use('/categories', categoriesRoutes);
router.use('/specifications', specificationsRoutes);
router.use('/sessions', authenticateRouter);

export { router }