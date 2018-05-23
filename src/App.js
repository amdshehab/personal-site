import React, { Component } from 'react';
import logo from './logo.svg';
import rocket from './assets/rocket.svg';
import './App.css';
import { FadeBox} from './components/fade-box/fade-box';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <FadeBox direction={'slide-in-from-left '} />
        <FadeBox direction={'slide-in-from-right '} />
        <FadeBox direction={'slide-in-from-left '} />
      </div>
    );
  }
}

export default App;
