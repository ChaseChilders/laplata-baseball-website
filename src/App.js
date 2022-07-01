import logo from "./logo.svg";
import NavigationBar from "./components/NavigationBar";
import "./App.css";
import { EditableTable } from "./routes/Roster";
import { Link, Route, Routes } from "react-router-dom";
import { Roster } from "./routes/Roster";
import Schedule from "./routes/Schedule";
import Stats from "./routes/Stats";
import Home from "./routes/Home";

function App() {
  return (
    <div class="appContainer">
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/roster" element={<Roster />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
