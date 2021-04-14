import { Specification } from '@modules/cars/infra/typeorm/entities/Specification';
import { ICreateSpecificationDTO, ISpecificationsRepository } from '../ISpecificationsRepository';

class FakeSpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[] = [];

  async create({ name, description }: ICreateSpecificationDTO): Promise<Specification> {
    const specification = new Specification();

    Object.assign({
      name,
      description
    });

    this.specifications.push(specification);

    return specification;
  }

  async find(): Promise<Specification[]> {
    return this.specifications;
  }

  async findByName(name: string): Promise<Specification> {
    const specifications = this.specifications.find(specification => specification.name === name);

    return specifications;
  }

  async findByIDs(ids: string[]): Promise<Specification[]> {
    const specifications = this.specifications.filter(specification => ids.includes(specification.id));

    return specifications;
  }
}

export { FakeSpecificationsRepository }