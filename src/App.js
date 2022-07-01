import logo from "./logo.svg";
import NavigationBar from "./components/NavigationBar";
import HomeCarousel from "./components/Carousel";
import "./App.css";

function App() {
  return (
    <div class="appContainer">
      <div className="App">
        <NavigationBar />
        <HomeCarousel className="carouselDiv" />
      </div>
    </div>
  );
}

export default App;
