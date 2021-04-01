import { Request, Response } from 'express';
import { ListSpecificationsUseCase } from './ListSpecificationsUseCase';

class ListSpecificationsController {
  constructor(
    private listSpecificationsUseCases: ListSpecificationsUseCase
  ) { }

  public async handle(request: Request, response: Response): Promise<Response> {
    const specifications = await this.listSpecificationsUseCases.execute();
    return response.json(specifications);
  }
}

export { ListSpecificationsController }