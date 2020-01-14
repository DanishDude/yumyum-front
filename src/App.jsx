import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import CreateRecipePage from './containers/InsertRecipe/CreateRecipePage';
import CreateRecipePageOLD from './containers/InsertRecipe/CreateRecipePageOLD';
import GetUser from './containers/ConnectUser/GetUser';
import Home from './components/Home';
import LoginPage from './containers/ConnectUser/LoginPage';
import MyProfile from './containers/UserProfile/MyProfile';
import NavigationBar from './components/NavigationBar';
import PrivateRoute from './containers/ConnectUser/PrivateRoute';
import ProfileContainer from './containers/UserProfile/ProfileContainer';
import Recipe from './containers/Recipe/Recipe';
import Recipes from './containers/Recipes/Recipes';
import SignupPage from './containers/ConnectUser/SignupPage';
import './App.scss';

const App = () => {
  const token = window.localStorage.getItem('token');

  return (
    <div className="App">
      <div className="wrapper">
        <GetUser token={token} />
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
          <PrivateRoute path = '/old-create-recipe' component={CreateRecipePageOLD} />
          <PrivateRoute path = '/my-profile' component={MyProfile} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
