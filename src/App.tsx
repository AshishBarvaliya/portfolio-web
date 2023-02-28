import { Navbar } from "./components";
import { Hero, Footer, Work, Skills, About } from "./containers";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      {/* <About /> */}
      {/* <Work /> */}
      {/* <Skills /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
