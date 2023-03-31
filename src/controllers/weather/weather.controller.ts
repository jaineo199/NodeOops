import { Request, Response } from "express";
import { WeatherService } from "../../services/weather/weather.service";

const weatherService = new WeatherService();

export class WeatherController {
  async getWeather(req: Request, res: Response): Promise<void> {
    try {
      const weather = await weatherService.getWeather(req, res);
      res.status(200).json(weather);
    } catch (error) {}
  }
}
