import "./css/app.css";
import React, { useState, useEffect } from "react";
import MainScreen from "./components/pages/MainScreen/Main/MainScreen";
import Services from "./components/pages/Services/Main/Services";

function App() {
  const [section, setSection] = useState(1);

  useEffect(() => {
    console.log(section);
  });

  return (
    <div className={`App section-${section}`}>
      <MainScreen section={section} setSection={setSection} />
      <Services section={section} />
    </div>
  );
}

export default App;
