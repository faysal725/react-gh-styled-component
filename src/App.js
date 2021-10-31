import React, { Component } from 'react';
import classes from './Components/button.module.css'
import Inputs from './Components/Inputs/index';

class App extends Component {



  render() {
    return (
      <div className={classes.Wrapper}>
          <h1 className={classes.Heading}>Events in React</h1>
          <button className={classes.button}><h3>Click Me !</h3></button>

      <br /><br />
        <Inputs></Inputs>
      </div>
    );
  }
}

export default App;
