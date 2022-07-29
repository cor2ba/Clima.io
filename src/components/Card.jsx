import React from "react";
import "./Card.css";

export default function Card({
  min,
  max,
  name,
  img,
  onClose,
  longitud,
  latitud,
  clouds,
}) {
  return (
    <div className="card">
      <div id="closeIcon" className="row">
        <button onClick={onClose} className="btn">
          X
        </button>
      </div>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4">
            <p className="titulo">Min:</p>
            <p>{min}°</p>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <p className="titulo">Max</p>
            <p>{max}°</p>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <img
              className="iconoClima"
              src={"http://openweathermap.org/img/wn/" + img + "@2x.png"}
              width="80"
              height="80"
              alt=""
            />
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <p className="titulo">Longitud:</p>
            <p>{longitud}</p>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <p className="titulo">Latitud:</p>
            <p>{latitud}</p>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <p className="titulo">Clouds:</p>
            <p>{clouds}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
