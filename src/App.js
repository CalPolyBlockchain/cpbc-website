import { createContext, useState } from 'react'
import Projects from './components/Projects/Projects';

export const ThemeContext = createContext(null)
function App() {
  const [theme, setTheme] = useState('light')
  const toggleTheme = ()=>{
    setTheme((current) => (current === "light" ? "dark" : "light"));
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Projects />
    </ThemeContext.Provider>
  );
}

export default App;


//       <div class="container">
//<h1 id={theme} className="text-3xl font-bold underline">
//Hello world!
//</h1>
//</div>