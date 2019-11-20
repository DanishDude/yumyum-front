import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Recipes from './containers/Recipes/Recipes';
import Recipe from './containers/Recipe/Recipe';
import Connected from './components/Conected';
import SignIn from './containers/ConnectUser/SignIn';
import PrivateRoute from './containers/ConnectUser/PrivateRoute';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <div className="wrapper">
            <NavigationBar className="navigation-bar" />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/recipes" component={Recipes} />
              <Route path="/recipe" component={Recipe} />
              <Route path="/about-us" component={AboutUs} />
              <Route path="/contact" component={Contact} />
              <Route path="/signin" component={SignIn} />
              <PrivateRoute exact path="/connected" component={Connected} />
            </Switch>
          </div>
      </div>
    );
  }
}

export default App;
