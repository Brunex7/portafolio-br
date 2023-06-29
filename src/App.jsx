import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Landing from "./components/Landing"
import About from "./components/About"
import Projects from "./components/Projects"



function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  )
}

export default App
