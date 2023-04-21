const key = "e0e1642f1a6c9f3af22b59f96a156341";

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=ru-RU&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=ru-RU&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=ru-RU&page=2`,
  requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=ru-RU&page=1&query=horror&include_adult=true`,
  requestUpcomming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=ru-RU&page=1`,
};
export default requests;
