import './App.css';
import Theme from './Theme';
import { theme } from './Theme';
import Hero from './Hero';
import Header from './Header';

function App() {
  return (
    <>
      <Theme>
        <div className="page"></div>
        <Header />
        <Hero />
      </Theme>
    </>
  );
}

export default App;
