import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { name, email } = request.body;
      const user = this.createUserUseCase.execute({ email, name });
      return response.status(201).send(user);
    } catch (e) {
      return response.status(400).send({ error: e });
    }
  }
}

export { CreateUserController };
