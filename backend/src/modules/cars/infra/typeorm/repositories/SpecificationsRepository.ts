import { getRepository, Repository } from 'typeorm';
import { Specification } from '../entities/Specification';
import { ISpecificationsRepository, ICreateSpecificationDTO } from '../../../repositories/ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification);
  }

  public async create({ name, description }: ICreateSpecificationDTO): Promise<Specification> {
    const specification = this.repository.create({ name, description });

    await this.repository.save(specification);

    return specification;
  }

  public async findByName(name: string): Promise<Specification> {
    const specification = await this.repository.findOne({ name });
    return specification;
  }

  public async find(): Promise<Specification[]> {
    return await this.repository.find();
  }

  public async findByIDs(ids: string[]): Promise<Specification[]> {
    const specifications = await this.repository.findByIds(ids);
    return specifications;
  }
}

export { SpecificationsRepository }