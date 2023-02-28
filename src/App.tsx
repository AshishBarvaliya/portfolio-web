import { Navbar } from "./components";
import { Hero, Footer, Work, Skills } from "./containers";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      {/* <Work /> */}
      {/* <Skills /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
