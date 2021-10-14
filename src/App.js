import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import NavMenu from './components/NavMenu/NavMenu';
import AboutSection from './containers/AboutSection/AboutSection';
import FeaturesSection from './containers/FeaturesSection/FeaturesSection';
import HeroSection from './containers/HeroSection/HeroSection';
import RoadMapSection from './containers/RoadMapSection/RoadMapSection';
import ShowCaseSection from './containers/ShowCaseSection/ShowCaseSection';
import TeamSection from './containers/TeamSection/TeamSection';
import MenuProvider from './context/menu.context';

function App() {
  return (
    <MenuProvider>
      <div className="App">
        <Navbar/>
        <NavMenu/>
        <HeroSection/>
        <FeaturesSection/>
        <AboutSection/>
        <ShowCaseSection/>
        <RoadMapSection/>
        <TeamSection/>
        <Footer/>
      </div>
    </MenuProvider>
  );
}

export default App;
