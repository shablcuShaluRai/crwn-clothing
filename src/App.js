import React from 'react';
import { Switch, Route } from "react-router-dom"
import Homepage from "./views/Homepage"
import Shop from "./views/shop/Shop"
import Header from "./views/Header"


function HatsPage() {
  return(
    <div>Hats PAgE</div>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
