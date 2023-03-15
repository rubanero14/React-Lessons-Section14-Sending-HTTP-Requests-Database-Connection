import React, { useState } from "react";
import axios from "axios";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [dummyMovies, setDummyMovies] = useState([]);

  const fetchMovies = async () => {
    const response = await axios.get("https://swapi.dev/api/films");
    return setDummyMovies(response.data.results);
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovies}>Fetch Movies</button>
      </section>
      {dummyMovies.length > 0 && (
        <section>
          <MoviesList movies={dummyMovies} />
        </section>
      )}
    </React.Fragment>
  );
}

export default App;
