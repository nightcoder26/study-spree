import "./App.css";
import "./Navbar.css";
import "./MainComponent.css";
import MainComponent from "./MainComponent.js";
import Navbar from "./Navbar.js";

const App = () => {
  return (
    <div>
      <Navbar />
      <MainComponent />
    </div>
  );
};

export default App;
