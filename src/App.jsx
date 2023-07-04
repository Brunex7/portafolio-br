import { useEffect } from "react";
import Home from "./components/Home";
import Landing from "./components/Landing";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {

  useEffect(() => {
    if (window.performance.navigation.type === 1) {
      window.location.href = "/";
    }
  }, []);

  return (
    <>
      <Landing />
      <About />
      <Home />
      <Projects />
    </>
  );
}

export default App;
