import React, { Component } from 'react';

class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        <h1>This is the About page</h1>
        <ul>
          <li>yumy.um</li>
          <li>Recepie cards</li>
          <p> title, image, description, ingredients list, prep/cook time, ratings</p>
          <p>serves 4-6, written by, nutritionm freezable</p>
          <li>Blog</li>
          <li>Forum - @mention recepie / comment thread</li>
          <li>Kitchen tips</li>
          <li>Holiday Specials</li>
          <li>User profile</li>
          <li>Eating seasonal</li>
          <li>Shopping List</li>
        </ul>
      </div>
    );
  }
}
 
export default AboutUs;