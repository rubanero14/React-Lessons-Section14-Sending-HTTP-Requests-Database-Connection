import React, { useState } from "react";
import axios from "axios";

import Loading from "./components/Loading";
import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [dummyMovies, setDummyMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = async () => {
    setIsLoading(true);
    const response = await axios.get("https://swapi.dev/api/films");
    setDummyMovies(response.data.results);
    return setIsLoading(false);
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovies}>Fetch Movies</button>
      </section>
      <section>
        {isLoading && <Loading />}
        {dummyMovies.length === 0 && !isLoading && (
          <p className="mb-0 text-danger">
            <strong>No movies found!</strong>
          </p>
        )}
        {dummyMovies.length > 0 && !isLoading && (
          <MoviesList movies={dummyMovies} />
        )}
      </section>
    </React.Fragment>
  );
}

export default App;
