import React from "react";
import Cards from "./componentss/Cards";


function App() {
  return(
   <div>
    <h1>Propiedades de los componentes</h1>
    
    <div className="row">
    <div className="col">
    <Cards
    imagen="https://lorempixel.com/150/150"
    titulo="Titulo card 1"
    texto="Texto de la carta 1"
    />
    </div><div className="col">
    <Cards
    imagen="https://lorempixel.com/150/150"
    titulo="Titulo card 2"
    texto="Texto de la carta 2"
    />
    </div>
    <div className="col">
    <Cards
    imagen="https://lorempixel.com/150/150"
    titulo="Titulo card 3"
    texto="Texto de la carta 3"
    />
    </div>
    </div>
   </div>
  );
}
export default App;
