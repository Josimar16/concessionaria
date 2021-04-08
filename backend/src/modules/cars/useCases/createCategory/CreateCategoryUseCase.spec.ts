import { AppError } from "@errors/AppError";
import { FakeCategoriesRepository } from "@modules/cars/repositories/fakes/FakeCategoriesRepository";
import { ICreateCategoryDTO } from "@modules/cars/repositories/ICategoriesRepository";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

let createCategoryUseCase: CreateCategoryUseCase;
let fakeCategoriesRepository: FakeCategoriesRepository;

describe('Create Category', () => {
  beforeEach(() => {
    fakeCategoriesRepository = new FakeCategoriesRepository();
    createCategoryUseCase = new CreateCategoryUseCase(fakeCategoriesRepository);
  });

  it('should be able to create a new category', async () => {
    const category: ICreateCategoryDTO = {
      name: 'Sedan',
      description: 'Categória Sedan'
    }
    await createCategoryUseCase.execute({
      name: category.name,
      description: category.description
    });
    const categoryCreated = await fakeCategoriesRepository.findByName(category.name);

    expect(categoryCreated).toHaveProperty('id');
  });

  it('should not be able to create a new category with name exists', async () => {
    expect(async () => {
      const category: ICreateCategoryDTO = {
        name: 'Test',
        description: 'Description test'
      }
      await createCategoryUseCase.execute({
        name: category.name,
        description: category.description
      });
      await createCategoryUseCase.execute({
        name: category.name,
        description: category.description
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});