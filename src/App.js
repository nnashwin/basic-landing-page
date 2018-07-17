import React, { Component } from 'react';
import './App.css';
import { StyledNav } from './components/Navbar';
import { StyledHeader } from './components/Overlay';
import { StyledIconSection, Section, SplitDiv, SplitPicDiv, SplitTextDiv, SplitTextTitle, SplitTextBody } from './components/Section';

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
				<SplitTextDiv order={'left'}>Textbox</SplitTextDiv>
				<SplitPicDiv order={'right'} imageUrl={'https://placekitten.com/1200/480'} />
			</SplitDiv>
			<SplitDiv>
				<SplitTextDiv order={'right'}>Textbox2</SplitTextDiv>
				<SplitPicDiv order={'left'} imageUrl={'https://placekitten.com/1200/480'} />
			</SplitDiv>
			<SplitDiv>
				<SplitTextDiv order={'left'} >
					<SplitTextTitle>
						Totally Cats
					</SplitTextTitle>
					<SplitTextBody>
						These cats are the best cats I have ever seen!  Never before have cats been so interesting to me and taught me sooooo much!
					</SplitTextBody>
				</SplitTextDiv>
				<SplitPicDiv order={'right'} imageUrl={'https://placekitten.com/1200/480'} />
			</SplitDiv>
		</Section>
      </div>
    );
  }
}

export default App;
