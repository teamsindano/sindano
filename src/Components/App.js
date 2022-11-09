import './App.css';
import Theme from './Theme';
import { theme } from './Theme';
import Hero from './Hero';

function App() {
  return (
    <>
      <Theme>
        <div className="page"></div>
        <Hero />
      </Theme>
    </>
  );
}

export default App;
