import React, { Component } from 'react';
import './Home.scss';

const Home = () => {
  document.addEventListener('DOMContentLoaded',function(event){
    const dataText = [
      "Discover new flavors",
      "Learn new tricks in the kitchen",
      "What can I cook in my fridge",
      "Share your kitchen serets"];
    
    // type one text in the typwriter, keeps calling itself until the text is finished
    const typeWriter = (text, i, fnCallback) => {
      // check if text isn't finished yet
      if (i < (text.length)) {
        // add next character to h1
        document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
  
        // wait for a while and call this function again for next character
        setTimeout(() => {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }
      // text finished, call callback if there is a callback function
      else if (typeof fnCallback === 'function') {
        // call callback after timeout
        setTimeout(fnCallback, 3000);
      }
    }

    // start a typewriter animation for a text in the dataText array
    const startTextAnimation = i => {
      if (typeof dataText[i] === 'undefined'){
        setTimeout(() => {
          startTextAnimation(0);
        }, 3000);
      }
      // check if dataText[i] exists
      if (dataText[i]) {
        typeWriter(dataText[i], 0, () => {
          // after callback (and whole text has been animated), start next text
          startTextAnimation(i + 1);
        });
      }
    }

    startTextAnimation(0);
  });

  return (
    <div className="Home">
      <div className="header">
        <img className="cover" src="/cooking_together.jpg" alt="" />
        <h1>Share your kitchen secrets</h1>
      </div>
    </div>
  );
}
 
export default Home;
