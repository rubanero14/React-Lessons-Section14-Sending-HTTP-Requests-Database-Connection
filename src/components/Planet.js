import React from "react";

import classes from "./Planet.module.css";

const Planet = (props) => {
  return (
    <li className={classes.planet}>
      <h2>{props.planet.name}</h2>
      <h3>Population: {props.planet.population}</h3>
      <h4>Diameter:&nbsp; {props.planet.diameter}</h4>
      <h4>Rotation period:&nbsp; {props.planet.rotation_period}</h4>
      <h4>Orbital period:&nbsp; {props.planet.orbital_period}</h4>
      <h4>Climate:&nbsp; {props.planet.climate}</h4>
      <h4>Gravity strength:&nbsp; {props.planet.gravity}</h4>
      <h4>Surface Water:&nbsp; {props.planet.surface_water}</h4>
      <h4>Terrain:&nbsp; {props.planet.terrain}</h4>
    </li>
  );
};

export default Planet;
