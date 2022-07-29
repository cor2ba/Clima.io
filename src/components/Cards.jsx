import React from "react";
import "./Cards.css";
import Card from "./Card.jsx";
import icono from "../iconosol.png";

export default function Cards({ cities, onClose }) {
  if (cities.length === 0) {
    return (
      <div className="container">
        <img className="image" src={icono} alt="Icono" />
        <h1 className="text">¡BUSCA UNA CIUDAD!</h1>
      </div>
    );
  }
  if (cities) {
    return (
      <div className="cards">
        {cities.map((c) => (
          <Card
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            onClose={() => onClose(c.id)}
            id={c.id}
            longitud={c.longitud}
            latitud={c.latitud}
            clouds={c.clouds}
          />
        ))}
      </div>
    );
  }
}
