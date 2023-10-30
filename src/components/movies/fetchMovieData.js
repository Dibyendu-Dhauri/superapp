
export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNGYxNWRjNzY1Y2NkZWE4ZDg4NWUwYTJjNmMzZmJmNyIsInN1YiI6IjY1MDJjYTlkZWZlYTdhMDBmZDFjOGU3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qJCZPhVnxCU6k4jQwK3egtp2kdo50sydV-ZhqsvB9IM",
  },
};

export const fetchFromAPI = (genreName) => {
  return new Promise((resolve, reject) => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list`, options)
      .then((response) => response.json())
      .then((data) => {
        const genre = data.genres.find((genre) => genre.name === genreName);

        if (genre) {
          const apiUrl = `https://api.themoviedb.org/3/discover/movie?with_genres=${genre.id}`;
          return fetch(apiUrl, options);
        } else {
          throw new Error("genre not found");
        }
      })
      .then((response) => response.json())
      .then((data) => {
        resolve(data.results);
      })
      .catch((error) => reject(error));
  });
};
