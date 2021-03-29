import { Request, Response } from 'express';
import { ListCategoriesUseCase } from './ListCategoriesUseCase';

class ListCategoriesController {
  constructor(
    private listCategoriesUseCases: ListCategoriesUseCase
  ) { }

  handle(request: Request, response: Response): Response {
    const categories = this.listCategoriesUseCases.execute();
    return response.json(categories);
  }
}

export { ListCategoriesController }