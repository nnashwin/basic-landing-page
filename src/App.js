import React, { Component } from 'react';
import './App.css';
import { StyledNav } from './components/Navbar';
import { StyledHeader } from './components/Overlay';

class App extends Component {
  render() {
    return (
      <div className="App">

		<StyledNav links={[{href: "google.com", text: "Home"}, {href: "amazon.com", text: 'Sign Up', isButton: true}]}></StyledNav>
		<StyledHeader imageUrl={"https://placekitten.com/1200/945"}></StyledHeader>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
