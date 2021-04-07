import 'reflect-metadata';
import 'dotenv/config';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import swaggerUi from 'swagger-ui-express';
import '../typeorm';
import '../../container';
import { AppError } from '../../errors/AppError';
import { router } from './routes';
import swaggerFile from '../../../swagger.json';

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router)

// errors
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      statusCode: err.statusCode,
      message: err.message
    });
  }

  return response.status(500).json({
    status: "Error",
    message: `Internal server error - ${err.message}`
  });
});

app.listen(process.env.APP_PORT || 3333, () => {
  console.log(`Listening in port ${process.env.APP_PORT || 3333} 🚀`);
});