import { Request, Response } from 'express';
import { ListSpecificationsUseCase } from './ListSpecificationsUseCase';

class ListSpecificationsController {
  constructor(
    private listSpecificationsUseCases: ListSpecificationsUseCase
  ) { }

  handle(request: Request, response: Response): Response {
    const specifications = this.listSpecificationsUseCases.execute();
    return response.json(specifications);
  }
}

export { ListSpecificationsController }