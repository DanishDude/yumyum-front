import React from 'react';
import { connect } from 'react-redux';

// recepies is an array of objects {recepie}

function RecepieCard({ recepies }) {
console.log(recepies.title);

  return (
    <li
      key>
      <div>
        <h3>{ recepies.title }</h3>  
      </div>
    </li>
  )
}

const mstp = state => ({ recepies: state.recepies.recepies });

export default connect(mstp, null)(RecepieCard);