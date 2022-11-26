import React, { useState } from "react";
import styled from "styled-components";

/**
 * Content Component
 * @author [Pedro Nepomuceno](https://github.com/Pedro-Nepomuceno)
 */

const Div = styled.div`
	position: absolute;
	z-index: 4;
	display: flex;
	align-items: center;
`;

const StyledList = styled.ul`
	position: relative;
	display: flex;
	background-color: #ffffff;
	z-index: 4;
	flex-direction: column;
	list-style: none;
	height: 375px;
	max-width: 440px;
	opacity: ${({ open }) => (open ? 1 : 0)};
	display: ${({ open }) => (open ? "flex" : "none")};
	margin-top: 460px;
	align-items: center;
	justify-content: center;
	padding-left: 10px;
	padding-right: 10px;
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
	font-family: ${(props) => `${props.theme.fonts.text.font_family}`};
	font-size: ${(props) => `${props.theme.fonts.text.sizes.text_m}`};
	font-weight: ${(props) => `${props.theme.fonts.text.weights.bold}`};
	color: ${(props) => `${props.theme.colors.default_text_color}`};
`;
const BurgerButton = styled.button`
	width: 343px;
	font-family: ${(props) => props.theme.fonts.text.font_family[0]};
	display: inline-block;
	white-space: nowrap;
	color: ${(props) => props.theme.colors.alt_text_white};
	background-color: ${(props) => props.theme.colors.default_button_aqua};
	border-radius: 12px;
	font-weight: ${(props) => props.theme.fonts.text.weights.bold};
	font-size: ${(props) => props.theme.fonts.text.sizes.text_m};
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
