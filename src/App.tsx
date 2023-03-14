import { Navbar } from "./components";
import { Hero, Footer, Experiences, Projects } from "./containers";
import "./App.scss";

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
