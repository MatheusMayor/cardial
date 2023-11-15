import NavBar from './sections/NavBar/index';
import BannerPrimary from './sections/BannerPrimary/index';
import AboutMe from './sections/AboutMe/index';
import Footer from './sections/Footer/index';

import './global.css';
import Particles from "./components/Particles/index";




function App() {

  return (
    <div className="container">
      <Particles className="particles" />
      <NavBar />
      <BannerPrimary />
      <AboutMe />
      <Footer />

    </div>
  );
}

export default App;
