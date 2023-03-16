import React from "react";

import Planet from "./Planet";
import classes from "./PlanetsList.module.css";

const PlanetsList = (props) => {
  return (
    <ul className={classes["planets-list"]}>
      {props.planets.map((planet) => (
        <Planet key={planet.name} planet={planet} />
      ))}
    </ul>
  );
};

export default PlanetsList;
