import { createContext, useState } from 'react'
import './App.css';
export const ThemeContext = createContext(null)
function App() {
  const [theme, setTheme] = useState('light')
  const toggleTheme = ()=>{
    setTheme((current) => (current === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div class="container">
      <h1 id={theme} className="text-3xl font-bold underline">
        Hello world!
      </h1>
      </div>
    </ThemeContext.Provider>

  );
}

export default App;
