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
      const projects = ['About', 'Projects', 'Contact']
    return (
      <div className="nav-container">
        {projects.map((projects) => <FadeBox title={projects}/>)}
      </div>
    );
  }
}

export default App;
