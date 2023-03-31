import { Request, Response } from "express";
import { UserService } from "../services/user.service";

const userService = new UserService();

export class UserController {
  async getUserTesting(req: Request, res: Response): Promise<void> {
    try {
      const user = await userService.getUserTesting();
      res.status(200).json(user);
    } catch (error) {}
  }
  async createUser(req: Request, res: Response): Promise<void> {
    try {
      const user = await userService.createUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}
