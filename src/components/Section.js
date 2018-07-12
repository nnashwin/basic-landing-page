import React from 'react';
import styled from 'styled-components';

const IconHolder = styled.div`
	display: flex;
	justify-content: space-around;
	margin: 0 auto;
	flex-wrap: wrap;
	max-width: 1140px;
`;

const IconTitle = styled.h3`
	font-size: 28px;
	text-align: center;
	font-weight: 700;
	line-height: 12px;
`;

const IconDesc = styled.p`
	font-size: 20px;
	font-weight: 300;
	line-height: 30px;
	text-align: center;
`;

const IconDiv = styled.div`
	max-width: 320px;
	padding: 20px 0;
`;

const IconPicDiv = styled.div`
	text-align: center;
`;

const IconSection = ({className}) => {
	return (
		<section className={className}>
			<IconHolder>
				<IconDiv>
					<IconPicDiv>picture</IconPicDiv>
					<IconTitle>Title</IconTitle>
					<IconDesc>These are words which will go in the first paragraph</IconDesc>
				</IconDiv>
				<IconDiv>
					<IconPicDiv>picture</IconPicDiv>
					<IconTitle>Title</IconTitle>
					<IconDesc>Use these words from the second paragrapn wisely</IconDesc>
				</IconDiv>
				<IconDiv>
					<IconPicDiv>picture</IconPicDiv>
					<IconTitle>Title</IconTitle>
					<IconDesc>I love cake from the depths of my belly</IconDesc>
				</IconDiv>
			</IconHolder>
		</section>
	);
}

export const StyledIconSection = styled(IconSection)`
	padding: 7rem 0;
`;
