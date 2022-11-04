import "./App.css";
import Theme from "./Theme";
import { theme } from "./Theme";
import TeamMember from "./Teammember";

function App() {
  return (
    <>
      <Theme>
        <div className="page">
          <TeamMember></TeamMember>
        </div>
      </Theme>
    </>
  );
}

export default App;
