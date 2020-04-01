import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Contact from './components/Contact';
import CreateRecipePage from './containers/InsertRecipe/CreateRecipePage';
import EditMyProfile from './containers/UserProfile/EditMyProfile';
import Footer from './components/Footer';
import GetUser from './containers/ConnectUser/GetUser';
import Home from './containers/Homepage/Home';
import LoginPage from './containers/ConnectUser/LoginPage';
import MyProfile from './containers/UserProfile/MyProfile';
import MyRecipes from './containers/UserProfile/MyRecipes';
import NavBar from './components/NavBar';
import PrivateRoute from './containers/ConnectUser/PrivateRoute';
import Recipe from './containers/Recipe/Recipe';
import RecipesPage from './containers/Recipes/RecipesPage';
import SignupPage from './containers/ConnectUser/SignupPage';
import './App.scss';

const App = () => {
  const token = window.localStorage.getItem('token');

  return (
    <div className="App">
      <div className="wrapper">
        <GetUser token={token} />
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path = '/recipes' component={RecipesPage} />
          <Route path = '/recipe/:id' component={Recipe} />
          <Route path = '/contact' component={Contact} />
          <Route path = '/login' component={LoginPage} />
          <Route path = '/signup' component={SignupPage} />
          <PrivateRoute exact path='/my-recipes' component={MyRecipes} />
          <PrivateRoute path = '/create-recipe' component={CreateRecipePage} />
          <PrivateRoute path = '/edit-profile' component={EditMyProfile} />
          <PrivateRoute path = '/my-profile' component={MyProfile} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;
