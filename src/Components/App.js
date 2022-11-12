import './App.css';
import InsightsSection from './InsightsSection';
import Theme from './Theme';
import { theme } from './Theme';

function App() {
  return (
    <>
      <Theme>
        <div className="page"></div>
        <InsightsSection />
      </Theme>
    </>
  );
}

export default App;
