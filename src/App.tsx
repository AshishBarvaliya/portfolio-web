import { Navbar } from "./components";
import { Header, Footer, Work, Skills, About } from "./containers";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
