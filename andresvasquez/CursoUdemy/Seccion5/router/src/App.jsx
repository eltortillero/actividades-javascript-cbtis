import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'

function App() {
  return (
   <Router>
<Link to ="/inicio">Inicio</Link>

<Link to ="/">Base</Link>
  <Routes>
  <Route exact path="/">
</Route>

 <Route path="/:nombre">


 </Route>
</Routes>
 

   </Router>
  );
}

export default App;