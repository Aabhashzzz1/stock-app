import "./App.css";

//components
import Marquee from "./components/header/Marquee";
import Main from "./components/main/Main";


function App() {
  return (
    <div className="App">
      <Marquee />
      <hr />
      <Main />
      <br />
      <hr />
      {/* <Price /> */}
    </div>
  );
}

export default App;
