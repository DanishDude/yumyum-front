import React, { Component } from 'react';
import './Home.scss';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div className="Home">
        <h1>This is a home page</h1>
      </div>
    );
  }
}
 
export default Home;