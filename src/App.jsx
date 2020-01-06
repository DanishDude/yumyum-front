import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Recipes from './containers/Recipes/Recipes';
import Recipe from './containers/Recipe/Recipe';
import Connected from './components/Conected';
import LoginPage from './containers/ConnectUser/LoginPage';
import SignupPage from './containers/ConnectUser/SignupPage';
import CreateRecipePage from './containers/InsertRecipe/CreateRecipePage';
import PrivateRoute from './containers/ConnectUser/PrivateRoute';
import './App.scss';

const App = () => {
    return (
      <div className="App">
        <div className="wrapper">
            <NavigationBar className="navigation-bar" />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path = "/recipes" component={Recipes} />
              <Route path = "/recipe" component={Recipe} />
              <Route path = "/about-us" component={AboutUs} />
              <Route path = "/contact" component={Contact} />
              <Route path = "/login" component={LoginPage} />
              <Route path = "/signup" component={SignupPage} />
              {/* <Route path = "/create-recipe" component={CreateRecipePage} /> */}
              <PrivateRoute path = "/create-recipe" component={CreateRecipePage} />
              <PrivateRoute exact path="/connected" component={Connected} />
            </Switch>
          </div>
      </div>
    );
}

export default App;
