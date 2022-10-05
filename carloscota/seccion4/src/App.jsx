import React from 'react';
import Cards from './components/Cards';

function App() {
  return (
   <div>
    <h1>Propiedades de los componentes: Escudo de Oaxaca</h1> 
<hr/>

    <div className="row">
      <div className="col">
        <Cards 
        imagen="https://i.blogs.es/5f5ec6/quetzalcoatl-936621_1920/840_560.jpg"
        titulo="Titulo carta 1"
        texto="Texto de Carta 1"/>

      </div>
      <div className="col">
      <Cards 
        imagen="https://i.blogs.es/5f5ec6/quetzalcoatl-936621_1920/840_560.jpg"
        titulo="Titulo carta 2"
        texto="Texto de Carta 2"/>

      </div>
    <div className="col">
    <Cards 
        imagen="https://i.blogs.es/5f5ec6/quetzalcoatl-936621_1920/840_560.jpg"
        titulo="Titulo carta 3"
        texto="Texto de carta 3"/>
      </div> 
    </div>
    </div>
  );
}

export default App;