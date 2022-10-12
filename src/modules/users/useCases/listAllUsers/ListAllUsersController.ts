import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.headers;
      const user = this.listAllUsersUseCase.execute({ user_id });
      return response.status(200).send(user);
    } catch (e) {
      return response.status(400).send({ error: e });
    }
  }
}

export { ListAllUsersController };
