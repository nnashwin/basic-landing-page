import React, { Component } from 'react';
import './App.css';
import { StyledNav } from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">

		<StyledNav links={[{href: "google.com", text: "cookies"}, {href: "amazon.com", text: 'cakes'}]}></StyledNav>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
