import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import './database';
import './shared/container';
import { router } from './routes';
import { AppError } from "./errors/AppError";
import swaggerFile from './swagger.json';

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

app.listen(3333, () => {
  console.log('Listening in port 3333 🚀');
});
