import { useState } from "react";
import Landing from "./components/Landing";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
    setDarkMode(!darkMode);
  };

  return <Landing darkMode={darkMode} toggleDarkMode={toggleDarkMode} />;
}

export default App;
