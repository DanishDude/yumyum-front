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
          <li>Blog</li>
          <li>Forum</li>
          <li>Kitchen tips</li>
          <li>Holiday Specials</li>
          <li>User profile</li>
          <li>Eating seasonal</li>
        </ul>
      </div>
    );
  }
}
 
export default AboutUs;