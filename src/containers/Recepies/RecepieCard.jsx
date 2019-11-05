import React from 'react';
//import { connect } from 'react-redux';

// recepies is an array of objects {recepie}

const RecepieCard = ({ recepie }) => {
console.log(recepie);

  return (
    <div className="RecepieCard">
      <h3>{ recepie.title }</h3>
      <img src="yumyum/yumyum-front/public/logo512.png" alt="" />
      <p>{ recepie.description }</p> 
    </div>
  )
}

//const mstp = state => ({ recepies: state.recepies.recepies });

export default RecepieCard //connect(mstp, null)(RecepieCard);