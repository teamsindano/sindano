import styled from "styled-components";

export const Button = styled.button`
	color: white;
	font-size: 16px;
	font-weight: 700;
	line-height: 20px;
	border-radius: 12px;
	padding: 15px 28px;
	width: 186px;
	border: none;
	height: 50px;
	background: ${(props) => props.backgroundColor};
	padding: 0;
	margin: 29px 20px 28px 8px;

	&:hover {
		cursor: pointer;
		background-color: ${(props) => props.backgroundColor};
	}
`;
export const ButtonLabel = styled.label`
	color: white;
	&:hover {
		cursor: pointer;
	}
`;
