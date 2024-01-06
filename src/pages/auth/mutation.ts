export const mutationLogin = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/authentication/guest_session/new",
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkODZmMjRjMmYzNWNmZTBjY2FmNjY0MTQwYzI1NTVkMyIsInN1YiI6IjY1NjY1YmUwODlkOTdmMDEzOGZmMDZiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-Ll3_-AYlDBBUme86aKe8wOIQNaOE9OGE7uaiqtx5vY",
      },
    }
  );

  console.log(res.json);

  return res.json();
};
