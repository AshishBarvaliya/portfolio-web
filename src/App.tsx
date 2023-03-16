import ReactGA from "react-ga";
import { Navbar } from "./components";
import { Hero, Footer, Experiences, Projects } from "./containers";
import "./App.scss";

const TRACKING_ID = process.env.REACT_APP_TRACKING_ID;
ReactGA.initialize(TRACKING_ID || "");

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Experiences />
      <Projects />
      {/* <Skills /> */}
      <Footer />
    </div>
  );
}

export default App;
