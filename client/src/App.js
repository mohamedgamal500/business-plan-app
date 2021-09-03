import "./App.css";
import StartScreen from "./components/StartScreen";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import EndScreen from "./components/EndScreen";
import { useSelector } from "react-redux";


function App() {
  const { appState } = useSelector((state) => state);

  return (
    <div className="App">
      <h1>Business Plan</h1>
      {appState === "start" && <StartScreen />}
      {appState === "sectionOne" && <SectionOne />}
      {appState === "sectionTwo" && <SectionTwo />}
      {appState === "finished" && <EndScreen />}
    </div>
  );
}

export default App;
