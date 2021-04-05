import { inject, injectable } from 'tsyringe';
import { Specification } from '../../infra/typeorm/entities/Specification';
import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';

@injectable()
class ListSpecificationsUseCase {
  constructor(
    @inject('SpecificationsRepository')
    private specificationsRepository: ISpecificationsRepository) { }

  public async execute(): Promise<Specification[]> {
    const specifications = await this.specificationsRepository.find();
    return specifications;
  }
}

export { ListSpecificationsUseCase }