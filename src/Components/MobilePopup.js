import React, { useState } from "react";
import styled from "styled-components";

const StyledList = styled.ul`
	display: flex;
	background-color: #ffffff;
	flex-direction: column;
	list-style: none;
	opacity: ${({ open }) => (open ? 1 : 0)};
`;

const MobilePopup = ({ open }) => {
	const items = [
		{ id: 1, text: "About" },
		{ id: 2, text: " What we do " },
		{ id: 3, text: "FAQ" },
	];
	return (
		<StyledList open={open}>
			{items.map((item) => (
				<li key={item.id}>{item.text}</li>
			))}
		</StyledList>
	);
};

export default MobilePopup;
