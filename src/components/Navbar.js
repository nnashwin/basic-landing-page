import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-sizing: border-box;
	text-align: left;
	padding: 15px 40px;
`;
	
const Navbar = ({className, links}) => {
	return (
		<nav className={className}>
			<Container>
				{links.map((link) => {
					let {href, text} = link;
					return <a href={href}>{text}</a>
				})}
			</Container>
		</nav>
	);
};

export const StyledNav = styled(Navbar)`
	display: flex;
	box-sizing: border-box;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	height: 60px;
`;
