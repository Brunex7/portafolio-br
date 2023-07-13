import { useEffect } from "react";
import Home from "./components/Home";
import Landing from "./components/Landing";
import About from "./components/About";
import Projects from "./components/Projects";
import NavFloating from "./components/NavFloating";
import Tags from "./components/Tags";

function App() {

  useEffect(() => {
    if (window.performance.navigation.type === 1) {
      window.location.href = "/";
    }
  }, []);

  return (
    <div>
      <NavFloating />
      <div>
        <Landing />
        <About />
        <Tags />
        <Home />
        <Projects />
      </div>
    </div>
  );
}

export default App;
