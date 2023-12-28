const key = process.env.REACT_APP_IMDB_API_KEY
const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    requestHorror: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&with_genres=27`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    requestRomance:`https://api.themoviedb.org/3//discover/movie?api_key=${key}&language=en-US&with_genres=10749`,
  };

  export default requests