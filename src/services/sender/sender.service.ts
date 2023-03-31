import { Request, Response } from "express";
import amqp from "amqplib";

export class SenderService {
  async sendMessage(req: Request, res: Response) {
    try {
      const { title, message } = req.body;
      // Create a connection to the server
      const connection = await amqp.connect("amqp://localhost:5672");
      // // Create a channel
      const channel = await connection.createChannel();
      // // Create a queue
      const queue = "task_queue";
      // Send a message to the queue
      //message is
      const msg = process.argv.slice(2).join(" ") || "Hello World!";
      await channel.assertQueue(queue, { durable: false });
      channel.sendToQueue(queue, Buffer.from(msg), {
        persistent: true,
      });
      console.log(`Message sent to queue ${message}`);
      // // Close the connection
      setTimeout(() => {
        connection.close();
        res.send("Message sent");
      }, 500);
    } catch (error) {
      console.log(error);
    }
  }
}
