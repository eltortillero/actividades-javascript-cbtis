import React from 'react';
import Inicio from './components4/Inicio'
import Base from './components4/Base'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

function App() {
  return (
   <Router>
<Link to ="/inicio">Inicio</Link>

<Link to ="/">Base</Link>
  
  <Route exact path="/">
  <Base/>
</Route>

 <Route path="/:nombre">

 <Inicio/>

 </Route>

 

   </Router>
  );
}

export default App;

