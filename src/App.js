import React from 'react';
import { Route } from "react-router-dom"
import Homepage from "./views/Homepage"
import Shop from "./views/shop/Shop"


function HatsPage() {
  return(
    <div>Hats PAgE</div>
  )
}

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Homepage} />
      <Route exact path="/shop" component={Shop} />
      <Route exact path="/shop/hats" component={HatsPage} />
      <Route exact path="/shop/hats" component={HatsPage} />
      <Route exact path="/shop/hats" component={HatsPage} />
    </div>
  );
}

export default App;
