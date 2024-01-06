export const fetchMovies = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkODZmMjRjMmYzNWNmZTBjY2FmNjY0MTQwYzI1NTVkMyIsInN1YiI6IjY1NjY1YmUwODlkOTdmMDEzOGZmMDZiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-Ll3_-AYlDBBUme86aKe8wOIQNaOE9OGE7uaiqtx5vY",
      },
    }
  );

  return res.json();
};

export const fetchTvShows = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkODZmMjRjMmYzNWNmZTBjY2FmNjY0MTQwYzI1NTVkMyIsInN1YiI6IjY1NjY1YmUwODlkOTdmMDEzOGZmMDZiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-Ll3_-AYlDBBUme86aKe8wOIQNaOE9OGE7uaiqtx5vY",
      },
    }
  );

  return res.json();
};
