import React, { useState } from "react";
import styled from "styled-components";

const StyledList = styled.ul`
	display: flex;
	background-color: #ffffff;
	flex-direction: column;
	list-style: none;
	max-width: 345px;
	max-height: 440px;
	opacity: ${({ open }) => (open ? 1 : 0)};
`;

export const StyledIcons = styled.li`
	text-decoration: none;
	list-style: none;
	display: inline-block;
	padding: 0 32px 0 0;
`;

export const StyledLinks = styled.a`
	text-decoration: none;
	font-family: ${(props) => `${props.theme.fonts.text.font_family}`};
	font-size: ${(props) => `${props.theme.fonts.text.sizes.text_m}`};
	font-weight: ${(props) => `${props.theme.fonts.text.weights.bold}`};
	color: ${(props) => `${props.theme.colors.default_text_color}`};
	line-height: 20px;
`;
const MobilePopup = ({ open }) => {
	return (
		<>
			<StyledList open={open}>
				<StyledIcons>
					<StyledLinks href="#ourstory">About</StyledLinks>
				</StyledIcons>
				<StyledIcons>
					<StyledLinks href="#whatwedo">What we do</StyledLinks>
				</StyledIcons>
				<StyledIcons>
					<StyledLinks href="#faq">FAQ</StyledLinks>
				</StyledIcons>
			</StyledList>
		</>
	);
};

export default MobilePopup;
