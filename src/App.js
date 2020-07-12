import React from 'react';
import { Switch, Route } from "react-router-dom"
import Homepage from "./views/Homepage"
import Shop from "./views/shop/Shop"
import SignInSignUp from "./views/SignInandSignUp"
import Header from "./Pages/Header"

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/shop" component={Shop} />
      <Route exact path="/signin" component={SignInSignUp} />
      </Switch>
    </div>
  );
}

export default App;
