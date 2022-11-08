
import "./App.css";
import Theme from "./Theme";
import { theme } from "./Theme";
import Footer from "./Footer"

function App() {
  return (
    <>
      <Theme>
        <div className="page"></div>
        <Footer />
      </Theme>
    </>
  );
}

export default App;
