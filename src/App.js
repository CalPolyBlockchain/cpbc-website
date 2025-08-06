import NavBar from './components/NavBar/NavBar';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Socials from './components/Socials/Socials';
import Team from './components/Team/Team';
import Partners from './components/Partners/Partners';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='body'>
      <NavBar />
      <About />
      <Socials />
      <Team />
      <Projects />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;
