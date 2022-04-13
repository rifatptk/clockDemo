import "./App.css";
import About from "./components/About";
import Cards from "./components/Cards";
import Clock from './components/Clock';
import Nav from "./components/Nav";
import ShapeBg from "./components/ShapeBg";

function App() {
  return <div className="App">
    <Nav />
    <Clock />
    <Cards />
    <ShapeBg />
    <About />
  </div>;
}

export default App;
