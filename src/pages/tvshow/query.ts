export const fetchTvShowDetails = async (tvShowId: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${tvShowId}?language=en-US`,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkODZmMjRjMmYzNWNmZTBjY2FmNjY0MTQwYzI1NTVkMyIsInN1YiI6IjY1NjY1YmUwODlkOTdmMDEzOGZmMDZiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-Ll3_-AYlDBBUme86aKe8wOIQNaOE9OGE7uaiqtx5vY",
      },
    }
  );

  return res.json();
};
