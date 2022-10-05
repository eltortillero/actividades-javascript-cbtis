import Cards from "./components/Cards";

function App() {
  return (
    <div>
      <h1>propiedades de los componentes</h1>

      <hr />
      <div className='row'>
        <div className='col'>
          <Cards
          imagen="https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800"
          titulo="Titulo card 1"
          texto="Texto de la card 2"
          />
        </div>
        <div className='col'>
          <Cards
          imagen="https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800"
          titulo="Titulo card 2"
          texto="Texto de la card 2"
          />
        </div>
        <div className='col'>
          <Cards
          imagen="https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800"
          titulo="Titulo card 3"
          texto="Texto de la card 3"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
