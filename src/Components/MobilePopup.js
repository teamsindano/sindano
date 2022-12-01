import React, { useState } from "react";
import styled from "styled-components";

/**
 * Content Component
 * @author [Pedro Nepomuceno](https://github.com/Pedro-Nepomuceno)
 */

const Div = styled.div`
	position: absolute;
	background-color: ${(props) => props.theme.colors.primary_background};
	z-index: 4;
	display: flex;
	top: 75px;
	right: 0;
	justify-content: center;
	left: 0;
	align-items: center;
`;

const StyledList = styled.ul`
	position: relative;
	display: flex;
	background-color: ${(props) => props.theme.colors.primary_background};
	z-index: 4;
	flex-direction: column;
	list-style: none;
	max-width: 440px;
	opacity: ${({ open }) => (open ? 1 : 0)};
	display: ${({ open }) => (open ? "flex" : "none")};
	align-items: center;
	justify-content: center;
	padding: 0;
`;

export const StyledIcons = styled.li`
	margin: 0 auto;
	padding: 20px 0;
	text-decoration: none;
	list-style: none;
	max-width: 282px;
`;

export const StyledLinks = styled.a`
	text-decoration: none;
	font-family: ${(props) => `${props.theme.fonts.families.text}`};
	font-size: ${(props) => `${props.theme.fonts.sizes.text_m}`};
	font-weight: ${(props) => `${props.theme.fonts.weights.bold}`};
	color: ${(props) => `${props.theme.colors.black_text_color}`};
`;
const BurgerButton = styled.button`
	width: 343px;
	font-family: ${(props) => props.theme.fonts.families.text};
	display: inline-block;
	white-space: nowrap;
	color: ${(props) => props.theme.colors.white_text_color};
	background-color: ${(props) => props.theme.colors.aqua_button_color};
	border-radius: 12px;
	font-weight: ${(props) => props.theme.fonts.weights.bold};
	font-size: ${(props) => props.theme.fonts.sizes.text_m};
	line-height: 1.25;
	cursor: pointer;
	height: 50px;
	margin: 60px auto 0;
	border: none;
	padding: 0;
`;
const MobilePopup = ({ open }) => {
	return (
		<>
			<Div>
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
					<BurgerButton>Request a call</BurgerButton>
				</StyledList>
			</Div>
		</>
	);
};

export default MobilePopup;
