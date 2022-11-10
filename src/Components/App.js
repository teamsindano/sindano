import "./App.css";
import Theme from "./Theme";
import { theme } from "./Theme";
import Hero from "./Hero";
import Questions from "./faq";

function App() {
	return (
		<>
			<Theme>
				<div className="page"></div>

				<Questions />
			</Theme>
		</>
	);
}

export default App;
