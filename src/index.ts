import express from "express";
import bodyParser from "body-parser";
import { UserController } from "./controllers/user.controller";
import { WeatherController } from "./controllers/weather/weather.controller";
import { MoviesController } from "./controllers/movies/movies.controller";
import { SenderController } from "./controllers/sender/sender.controller";
import { ReceiverController } from "./controllers/receiver/receiver.controller";
import { ExcelController } from "./controllers/excel/excel.controller";
import { connectDB } from "./dbConnection";
import cors from "cors";
//use cors

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(cors());

connectDB();

const userController = new UserController();

app.get("/users", userController.getUserTesting);
app.post("/users", userController.createUser);

// Weather
const weatherController = new WeatherController();

app.get("/weather", weatherController.getWeather);

// Movies
const moviesController = new MoviesController();

app.get("/movies", moviesController.getUpcomingMovies);

// Sender
const senderController = new SenderController();

app.post("/send", senderController.sendMessage);

// Receiver

const receiverController = new ReceiverController();

app.get("/receive", receiverController.receiveMessage);

// Excel

const excelController = new ExcelController();

app.get("/excel", excelController.getExcel);
app.post("/excels", excelController.insertDummyData);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
