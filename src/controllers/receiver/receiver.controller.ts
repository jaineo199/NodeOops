import { ReceiverService } from "../../services/receiver/receiver.service";
import { Request, Response } from "express";

const receiverService = new ReceiverService();

export class ReceiverController {
  async receiveMessage(req: Request, res: Response) {
    await receiverService.receiveMessage(req, res);
  }
}
