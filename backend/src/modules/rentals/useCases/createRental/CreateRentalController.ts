import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateRentalUseCase } from "./CreateRentalUseCase";

class CreateRentalController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const {
      user_id,
      car_id,
      expected_return_date
    } = request.body;

    const createRentalUseCase = container.resolve(CreateRentalUseCase);

    const rental = await createRentalUseCase.execute({
      user_id,
      car_id,
      expected_return_date
    });

    return response.status(201).send(rental);
  }
}

export { CreateRentalController }