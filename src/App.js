import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

import Loading from "./components/Loading";
import PlanetsList from "./components/PlanetsList";
import "./App.css";

function App() {
  const [dummyPlanets, setDummyPlanets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);

  const fetchSWPlanets = useCallback(async () => {
    setIsLoading(true);
    try {
      setIsError(false);
      const response = await axios.get("https://swapi.dev/api/planets");
      setDummyPlanets(response.data.results);
    } catch (err) {
      setError(err.message);
      setIsError(true);
    }
    return setIsLoading(false);
  }, []); // useCallback is wrapped the fn to avoid infinite loop as it comtains many external states, for dependencies not added since within fn only state is altered not used

  useEffect(() => {
    fetchSWPlanets();
  }, [fetchSWPlanets]); // adding fetchMovies fn as dependency because this fn contains many external states within it

  let content = "";

  if (dummyPlanets.length === 0 && !isLoading && !isError) {
    content = (
      <p className="mb-0 text-warning">
        <strong>No planets found!</strong>
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

  if (dummyPlanets.length > 0 && !isLoading && !isError) {
    content = <PlanetsList planets={dummyPlanets} />;
  }

  if (isLoading) {
    content = <Loading />;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchSWPlanets}>Star Wars Planets</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
