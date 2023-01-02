import styled from "styled-components";

/**
 * 
 * Responsive CSS: @author [Sam](https://github.com/Samm96)
 *
 */

const TitleContainer = styled.h2`
    font-family: ${(props) => props.theme.fonts.families.header};
    font-weight: 700;
    font-size: 52px;
    line-height: 1;
    margin: 0;
    color: #283592;
    max-width: 950px;
    margin-bottom: ${(props) => props.marginBottom + `px`};

    @media (max-width: 375px) {
        max-width: 343px;
        font-size: 40px;
    }
`;

function Title({ id, text, marginBottom, className }) {
	return (
		<TitleContainer className={className} id={id} marginBottom={marginBottom}>
			{text}
		</TitleContainer>
	);
}

export default Title;
