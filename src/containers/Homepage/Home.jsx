import React, { useEffect } from 'react';
import Header from './Header';
import Recipes from '../Recipes/Recipes';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Home">
      <Header />
      <Recipes />
    </div>
  );
}
 
export default Home;
