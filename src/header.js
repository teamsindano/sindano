import headerLogo from "../src/images/header.svg";
import { Button, ButtonLabel } from "./button.style.js";
import {
	StyledNav,
	StyledList,
	StyledIcons,
	StyledLinks,
} from "./nav.style.js";
import { HeaderStyle } from "./header.style";
import { LogoImage } from "./logoImage.style.js";
function Header() {
	return (
		<HeaderStyle>
			<LogoImage src={headerLogo} alt="Sindano logo"></LogoImage>

			<StyledNav>
				<StyledList>
					<StyledIcons>
						<StyledLinks href="#">About</StyledLinks>
					</StyledIcons>
					<StyledIcons>
						<StyledLinks href="#">What we do</StyledLinks>
					</StyledIcons>
					<StyledIcons>
						<StyledLinks href="#">FAQ</StyledLinks>
					</StyledIcons>
				</StyledList>
			</StyledNav>

			<Button backgroundColor="#EC1E7B">
				<ButtonLabel>Request a call</ButtonLabel>
			</Button>
		</HeaderStyle>
	);
}
export default Header;
