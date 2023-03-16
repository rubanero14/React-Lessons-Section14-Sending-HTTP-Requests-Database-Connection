import React, { useState } from "react";
import axios from "axios";

import Loading from "./components/Loading";
import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [dummyMovies, setDummyMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);

  const fetchMovies = async () => {
    setIsLoading(true);
    try {
      setIsError(false);
      const response = await axios.get("https://swapi.dev/api/films");
      setDummyMovies(response.data.results);
    } catch (err) {
      setError(err.message);
      setIsError(true);
    }
    return setIsLoading(false);
  };

  let content = "";

  if (dummyMovies.length === 0 && !isLoading && !isError) {
    content = (
      <p className="mb-0 text-warning">
        <strong>No movies found!</strong>
      </p>
    );
  }

  if (!isLoading && isError) {
    content = (
      <p className="mb-0 text-danger">
        <strong>{error}!</strong>
      </p>
    );
  }

  if (dummyMovies.length > 0 && !isLoading && !isError) {
    content = <MoviesList movies={dummyMovies} />;
  }

  if (isLoading) {
    content = <Loading />;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovies}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
