import './App.css';
import Theme from './Theme';
import { theme } from './Theme';
import Hero from './Hero';
import Header from './header';

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
