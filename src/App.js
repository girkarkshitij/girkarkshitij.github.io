import './App.css';
import Navbar from './components/nav/Navbar';
import Header from './components/containers/header/Header';
import AboutMe from './components/containers/aboutme/AboutMe';
import Portfolio from './components/containers/portfolio/Portfolio';
import Contact from './components/containers/contact/Contact';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutMe />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default App;
