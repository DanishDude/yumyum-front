import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Recipes from './containers/Recipes/Recipes';
import Recipe from './containers/Recipes/Recipe';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <div>
          <NavigationBar className="navigation-bar" />
        </div>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/recipes" component={Recipes} />
            <Route path="/recipe" component={Recipe} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
