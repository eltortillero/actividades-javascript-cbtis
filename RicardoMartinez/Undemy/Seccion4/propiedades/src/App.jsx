import React from 'react';
import Cards from './Componentes/Cards'

function App(){
  return(
    <div>
      <h1>Propiedades de los componentes</h1>
      <hr />
      <div className='row'>
        <div className='col'>
          <Cards
          imagen='https://m.media-amazon.com/images/I/61sqYDhR0pL._AC_SY450_.jpg'
          titulo='Titulo card 1'
          texto='Texto de la card 1' />
        </div>
        <div className='col'>
          <Cards
          imagen='https://i.pinimg.com/736x/b9/d9/89/b9d989fad7d053455af0955c5060d8fb.jpg'
          titulo='Titulo card 2'
          texto='Texto de card 2' />
        </div>
        <div className='col'>
        <Cards
          imagen='https://i.scdn.co/image/ab67616d0000b2735ac6151dc74caf0d0a617ef7'
          titulo='Titulo card 3'
          texto='Texto de card 3' />
        </div>
      </div>
    </div>
  );
}

export default App;
