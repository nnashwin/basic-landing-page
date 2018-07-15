import React, { Component } from 'react';
import './App.css';
import { StyledNav } from './components/Navbar';
import { StyledHeader } from './components/Overlay';
import { StyledIconSection, Section, SplitDiv, SplitPicDiv, SplitTextDiv } from './components/Section';

class App extends Component {
  render() {
    return (
      <div className="App">
		<StyledNav links={[{href: "google.com", text: "Home"}, {href: "amazon.com", text: 'Sign Up', isButton: true}]}></StyledNav>
		<StyledHeader imageUrl={"https://placekitten.com/1200/945"}></StyledHeader>
        
		<StyledIconSection>
			<p className="App-intro">
			  To get started, edit <code>src/App.js</code> and save to reload.
			</p>
		</StyledIconSection>
		<Section>
			<SplitDiv>
				<SplitPicDiv order={'right'} imageUrl={'https://placekitten.com/1000/480'}>Picture</SplitPicDiv>
				<SplitTextDiv>Textbox</SplitTextDiv>
			</SplitDiv>
		</Section>
      </div>
    );
  }
}

export default App;
