export default class TheMovieDbApi {
  apiBaseUrl = "https://api.themoviedb.org/3";
  apiKey;

  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  getPopularMovies = async (page = 1) => {
    const response = await fetch(
      `${this.apiBaseUrl}/movie/popular?api_key=${this.apiKey}&page=${page}`
    );

    return response.json();
  };

  getNowPlayingMovies = async (page = 1) => {
    const response = await fetch(
      `${this.apiBaseUrl}/movie/now_playing?api_key=${this.apiKey}&page=${page}`
    );
    return response.json();
  };

  getTopRatedMovies = async (page = 1) => {
    const response = await fetch(
      `${this.apiBaseUrl}/movie/top_rated?api_key=${this.apiKey}&page=${page}`
    );
    return response.json();
  };

  getUpcomingMovies = async (page = 1) => {
    const response = await fetch(
      `${this.apiBaseUrl}/movie/upcoming?api_key=${this.apiKey}&page=${page}`
    );
    return response.json();
  };

  getMovie = async (id) => {
    const response = await fetch(
      `${this.apiBaseUrl}/movie/${id}?api_key=${this.apiKey}&append_to_response=recommendations`
    );

    return response.json();
  };

  searchMovies = async (query, page = 1) => {
    const response = await fetch(
      `${this.apiBaseUrl}/search/movie?api_key=${this.apiKey}&query=${query}&page=${page}`
    );
    console.log(response);
    return response.json();
  };

  getSearchMovies = async (query, page = 1) => {
    const response = await fetch(
      `${this.apiBaseUrl}/search/movie?api_key=${this.apiKey}&query=${query}&page=${page}`
    );
    console.log(response);
    return response.json();
  };

  getGenres = async () => {
    const response = await fetch(
      `${this.apiBaseUrl}/genre/movie/list?api_key=${this.apiKey}`
    );

    return response.json();
  };
}
