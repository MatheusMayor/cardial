import NavBar from './sections/NavBar/index';
import BannerPrimary from './sections/BannerPrimary/index';
import AboutMe from './sections/AboutMe/index';
import MyProjects from './sections/MyProjects/index';
import Experience from './sections/Experience/index';
import Skills from './sections/Skills/index';
import Footer from './sections/Footer/index';

import './global.css';
import Particles from "./components/Particles/index";




function App() {

  return (
    <div className="container">
      <Particles className="particles"/>
  <NavBar/>
  <BannerPrimary /> 
  <AboutMe />
  <MyProjects />
  <Experience />
  <Skills />
  <Footer />

  </div>
  );
}

export default App;
