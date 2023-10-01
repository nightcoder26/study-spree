import "./App.css";
import "./Navbar.css";
import "./MainComponent.css";
import MainComponent from "./MainComponent.js";
import Navbar from "./Navbar.js";

const App = () => {
  return (
    <div className="whole-app">
      <Navbar />
      <MainComponent />
      {/* <About /> */}
    </div>
  );
};

export default App;
