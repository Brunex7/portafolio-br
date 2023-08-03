import { useEffect } from "react";
import Landing from "./components/Landing";
import About from "./components/About";
import Projects from "./components/Projects";
import NavFloating from "./components/NavFloating";
import Tags from "./components/Tags";
import Root from "./components/Root";

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
        <Projects />
        <About />
        <Tags />
        <Root />
      </div>
    </div>
  );
}

export default App;
