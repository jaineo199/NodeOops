import { Request, Response } from "express";
import amqp from "amqplib";

export class ReceiverService {
  async receiveMessage(req: Request, res: Response) {
    try {
      // Create a connection to the server
      const connection = await amqp.connect("amqp://localhost:5672");
      // Create a channel
      const channel = await connection.createChannel();

      // Create a queue
      const queue = "task_queue";
      // Send a message to the queue
      await channel.assertQueue(queue, { durable: false });
      channel.consume(
        queue,
        (msg) => {
          const secs = msg.content.toString().split(".").length - 1;

          console.log(`Received message ${msg.content.toString()}`);
          setTimeout(() => {
            console.log("Done");
          }, secs * 1000);
        },
        { noAck: true }
      );
      // Close the connection
      setTimeout(() => {
        connection.close();
        res.send("Message received");
      }, 500);
    } catch (error) {
      console.log(error);
    }
  }
}
