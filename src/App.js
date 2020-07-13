import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom"
import Homepage from "./views/Homepage"
import Shop from "./views/shop/Shop"
import SignInSignUp from "./views/SignInandSignUp"
import Header from "./Pages/Header"
import { auth } from "./firebase/firebasse-utils"

class App extends Component {
  state= {
    currentUser: null
  }

  unsubscribefromAuth = null

  componentDidMount() {
   this.unsubscribefromAuth =  auth.onAuthStateChanged(user => this.setState({ currentUser: user }))
  }

  componentWillUnmount() {
    this.unsubscribefromAuth()
  }

  render() {
    const { currentUser } = this.state
  return (
    <div className="App">
      <Header currentUser={currentUser} />
      <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/shop" component={Shop} />
      <Route exact path="/signin" component={SignInSignUp} />
      </Switch>
    </div>
  );
}
}

export default App;
