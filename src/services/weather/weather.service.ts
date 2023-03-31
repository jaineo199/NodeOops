import { Request, Response } from "express";
import axios from "axios";

export class WeatherService {
  async getWeather(req: Request, res: Response) {
    const options = {
      method: "GET",
      url: "https://moviesdatabase.p.rapidapi.com/titles/x/upcoming",
      params: { idsList: "tt0001702,tt0001856,tt0001856" },
      headers: {
        "X-RapidAPI-Key": "15da318d62msh6e656abe2be40bdp1e25dajsn91328770de2d",
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}
