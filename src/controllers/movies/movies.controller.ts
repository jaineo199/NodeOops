import { MoviesService } from "../../services/movies/movies.service";

const moviesService = new MoviesService();
export class MoviesController {
  getUpcomingMovies() {
    return moviesService.getUpcomingMovies();
  }
}
