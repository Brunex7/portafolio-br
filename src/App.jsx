import { useEffect } from "react";
import Home from "./components/Home";
import Landing from "./components/Landing";
import About from "./components/About";
import Projects from "./components/Projects";
import NavFloating from "./components/NavFloating";

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
        <Home />
        <Projects />
      </div>
    </div>
  );
}

export default App;
