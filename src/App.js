import React, { useState } from 'react';
import './App.css';
import Nav from "./components/Nav"
import Cards from './components/Cards.jsx';

export default function App() {
  const [cities, setCities] = useState([]);
  function onSearch(ciudad) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=7f446f1583cd1c8c4f9c14437611e70f&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
    setCities(oldCities => [...oldCities, ciudad]);
  }else {
    alert("Ciudad no encontrada");
  }
});
}
function onClose(id) {
  setCities(oldCities => oldCities.filter(c => c.id !== id));
}

return (
  <div className="App">
      <Nav onSearch={onSearch}/>
      <Cards cities = {cities} 
      onClose = {onClose}
      />
  </div>
  );}
