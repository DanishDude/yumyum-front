import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import CreateRecipePage from './containers/InsertRecipe/CreateRecipePage';
import Home from './components/Home';
import LoginPage from './containers/ConnectUser/LoginPage';
import MyRecipes from './containers/UserAccount/MyRecipes';
import MyProfile from './containers/UserAccount/MyProfile';
import NavigationBar from './components/NavigationBar';
import PrivateRoute from './containers/ConnectUser/PrivateRoute';
import ProfileContainer from './containers/UserAccount/ProfileContainer';
import Recipe from './containers/Recipe/Recipe';
import Recipes from './containers/Recipes/Recipes';
import SignupPage from './containers/ConnectUser/SignupPage';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <div className="wrapper">
          <NavigationBar className="navigation-bar" />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path = '/recipes' component={Recipes} />
            <Route path = '/recipe' component={Recipe} />
            <Route path = '/about-us' component={AboutUs} />
            <Route path = '/contact' component={Contact} />
            <Route path = '/login' component={LoginPage} />
            <Route path = '/signup' component={SignupPage} />
            <PrivateRoute exact path='/user-profile' component={ProfileContainer} />
            <PrivateRoute path = '/create-recipe' component={CreateRecipePage} />
            <PrivateRoute path = '/my-recipes' component={MyRecipes} />
            <PrivateRoute path = '/my-profile' component={MyProfile} />
          </Switch>
        </div>
    </div>
  );
}

export default App;
