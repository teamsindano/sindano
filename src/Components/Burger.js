import React, { useState } from "react";
import styled from "styled-components";
import MobilePopup from "./MobilePopup";

const StyledBurger = styled.div`
	width: 2rem;
	height: 2rem;
	position: fixed;
	display: flex;
	padding-right: 20px;
	justify-content: space-around;
	flex-flow: column nowrap;
	z-index: 5;
	div {
		width: 2rem;
		height: 0.1rem;
		border-radius: 10px;
		background-color: black;
		transform-origin: 1px;
		&:nth-child(1) {
			transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
		}
		&:nth-child(2) {
			transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
			opacity: ${({ open }) => (open ? 0 : 1)};
		}
		&:nth-child(3) {
			transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
		}
	}
`;

function Burger() {
	const [open, setOpen] = useState(false);
	return (
		<>
			<StyledBurger
				open={open}
				onClick={() => {
					setOpen(!open);
				}}>
				<div />
				<div />
				<div />
			</StyledBurger>
			<MobilePopup open={open} />
		</>
	);
}

export default Burger;
