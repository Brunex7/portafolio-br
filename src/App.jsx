import { useEffect, useState } from "react";
import Landing from "./components/Landing";
import About from "./components/About";
import Projects from "./components/Projects";
import NavFloating from "./components/NavFloating";
import Description from "./components/Description";
import projects from "./media/project";

function App() {
  const [showDetail, setShowDetail] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleClick = (cardId) => {
    setShowDetail(true);
    setSelectedCard(projects.find((card) => card.id === cardId));
  };

  const handleClose = () => {
    setShowDetail(false);
    setSelectedCard(null);
  };

  useEffect(() => {
    if (window.performance.navigation.type === 1) {
      window.location.href = "/";
    }
  }, []);

  return (
    <div>
      <NavFloating />
      <div>
        {!showDetail && (
          <>
            <Landing />
            {projects.map((card) => (
              <Projects
                key={card.id}
                data={card}
                onClick={() => handleClick(card.id)}
              />
            ))}
            <About />
          </>
        )}
        {showDetail && (
          <Description data={selectedCard} onClose={handleClose} />
        )}
      </div>
    </div>
  );
}

export default App;
