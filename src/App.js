import About from './About/About';
import './App.css';
import BLuebox from './Bluebox/BLuebox';
import Bluebox2 from './Bluebox/BLuebox2';
import Card from './Cards/Card';
import Client from './Clients/Client';
import Home from './Home/Home';
import Mobile from './Mobile/Mobile';
import Nav from './Navbar/Nav';
import Service from './Services/Service';

function App() {
  return (
    <>
      <Nav/>
      <Home/>
      <About/>
      <Card/>
      <Mobile/>
      <BLuebox/>
      <Client/>
      <Service/>
      <Bluebox2/>
    </>
  );
}

export default App;
