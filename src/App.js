import { createContext, useState } from 'react'
import NavBar from './components/NavBar/NavBar';
import Projects from './components/Projects/Projects';
import Partners from './components/Partners/Partners';
import About from './components/About/About';
export const ThemeContext = createContext(null)

function App() {
  const [theme, setTheme] = useState('dark')
  const toggleTheme = ()=>{
    setTheme((current) => (current === "light" ? "dark" : "light"));
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div class="body" id={theme}>
        <NavBar />
        <About />
        <Projects />
        <Partners/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;


