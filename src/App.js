import "./css/app.css";
import React, { useState } from "react";
import MainScreen from "./components/pages/MainScreen/Main/MainScreen";
import Services from "./components/pages/Services/Main/Services";

function App() {
  const [section, setSection] = useState(1);

  const changeSection = (oldSection, newSection) => {
    document.querySelector("body").classList.remove(`section-${oldSection}`);
    document.querySelector("body").classList.add(`section-${newSection}`);

    document.querySelector("html").classList.remove(`section-${oldSection}`);
    document.querySelector("html").classList.add(`section-${newSection}`);

    if (oldSection !== newSection) {
      setSection(newSection);
    }
  };

  return (
    <div className="App">
      <MainScreen section={section} />
      <Services section={section} />
    </div>
  );
}

export default App;
