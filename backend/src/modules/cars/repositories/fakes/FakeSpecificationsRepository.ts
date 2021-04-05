import { Specification } from '../../infra/typeorm/entities/Specification';
import { ICreateSpecificationDTO, ISpecificationsRepository } from '../ISpecificationsRepository';

class FakeSpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[] = [];

  async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
    const specification = new Specification();

    Object.assign({
      name,
      description
    });

    this.specifications.push(specification);

    return;
  }

  async find(): Promise<Specification[]> {
    return this.specifications;
  }

  async findByName(name: string): Promise<Specification> {
    const specifications = this.specifications.find(specification => specification.name === name);

    return specifications;
  }

  async findByIds(ids: string[]): Promise<Specification[]> {
    const specifications = this.specifications.filter(specification => ids.includes(specification.id));

    return specifications;
  }
}

export { FakeSpecificationsRepository }