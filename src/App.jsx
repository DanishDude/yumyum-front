import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Navebar from "./components/Navbar";
import Recepies from "./components/Recepies";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <div>
          <Navebar />
        </div>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/recepies" component={() => <Recepies />} />
            <Route path="/about-us" component={() => <AboutUs />} />
            <Route path="/contact" component={() => <Contact />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
