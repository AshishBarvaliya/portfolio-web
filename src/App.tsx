import { Navbar } from "./components";
import { Hero, Footer, Projects, Skills } from "./containers";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
