import React, { useState } from "react";
import "./SearchBar.css";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
        setCity("");
      }}
    >
      <input
        className="barra"
        type="text"
        placeholder="Cuidad..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <input className="boton1" type="submit" value="Agregar" />
      {/* <button onClick={()=>onSearch(onSearch)} className="boton1">Agregar</button>  */}
    </form>
  );
}
