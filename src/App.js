import './App.css';
import Navbar from './components/nav/Navbar';
import Header from './components/containers/header/Header';
import AboutMe from './components/containers/aboutme/AboutMe';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutMe />
    </div>
  );
};

export default App;
