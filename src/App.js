import About from './About/About';
import './App.css';
import BLuebox from './Bluebox/BLuebox';
import Card from './Cards/Card';
import Home from './Home/Home';
import Mobile from './Mobile/Mobile';
import Nav from './Navbar/Nav';

function App() {
  return (
    <>
      <Nav/>
      <Home/>
      <About/>
      <Card/>
      <Mobile/>
      <BLuebox/>
    </>
  );
}

export default App;
