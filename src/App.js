import { createContext, useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Socials from './components/Socials/Socials';
import Team from './components/Team/Team';
import Partners from './components/Partners/Partners';
import Footer from './components/Footer/Footer';
export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div class='body' id={theme}>
        <NavBar toggleTheme={toggleTheme} />
        <About />
        <Socials />
        <Projects />
        <Team />
        <Partners />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
