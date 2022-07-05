import logo from "./logo.svg";
import NavigationBar from "./components/NavigationBar";
import "./App.css";
import { EditableTable } from "./routes/Statistics";
import { Link, Route, Routes } from "react-router-dom";
import Schedule from "./routes/Schedule";
import { Statistics } from "./routes/Statistics";
import Home from "./routes/Home";
import Roster from "./routes/Roster";
import Favorites from "./routes/Favorites";

function App() {
  return (
    <div className="appContainer">
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/roster" element={<Roster />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
