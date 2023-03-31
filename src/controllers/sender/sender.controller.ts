import { SenderService } from "../../services/sender/sender.service";
import { Request, Response } from "express";
const senderService = new SenderService();

export class SenderController {
  async sendMessage(req: Request, res: Response) {
    await senderService.sendMessage(req, res);
  }
}
