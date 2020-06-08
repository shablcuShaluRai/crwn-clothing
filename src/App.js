import React from 'react';
import { Route } from "react-router-dom"
import Homepage from "./views/Homepage"


function HatsPage() {
  return(
    <div>Hats PAgE</div>
  )
}

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Homepage} />
      <Route path="/hats" component={HatsPage} />
    </div>
  );
}

export default App;
