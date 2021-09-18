import { Component } from "react";
import { Route, Switch, Link } from "react-router-dom"

class Navbar extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Link to="/home">Home</Link>
        </Switch>

        <Switch>
          <Link to="/projects">Projects</Link>
        </Switch>

        <Switch>
          <Link to="/cv">CV</Link>
        </Switch>
            
        <p>Text text text</p>
      </div>
    )
  }
}

export default Navbar;
