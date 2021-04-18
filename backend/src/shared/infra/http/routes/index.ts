import { Router } from 'express';
import { usersRoutes } from '@modules/accounts/infra/http/routes/users.routes';
import { categoriesRoutes } from '@modules/cars/infra/http/routes/categories.routes';
import { specificationsRoutes } from '@modules/cars/infra/http/routes/specifications.routes';
import { authenticateRouter } from '@modules/accounts/infra/http/routes/authenticate.routes';
import { carsRouter } from '@modules/cars/infra/http/routes/cars.routes';
import { rentalsRouter } from '@modules/rentals/infra/http/routes/rentals.routes';

const router = Router();

router.use('/users', usersRoutes);
router.use('/categories', categoriesRoutes);
router.use('/specifications', specificationsRoutes);
router.use('/sessions', authenticateRouter);
router.use('/cars', carsRouter);
router.use('/rentals', rentalsRouter);

export { router }