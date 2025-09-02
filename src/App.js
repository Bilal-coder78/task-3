import About from './About/About';
import './App.css';
import BLuebox from './Bluebox/BLuebox';
import Bluebox2 from './Bluebox/BLuebox2';
import Card from './Cards/Card';
import Client from './Clients/Client';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Mobile from './Mobile/Mobile';
import Nav from './Navbar/Nav';
import Service from './Services/Service';

function App() {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Card />
      <Mobile />
      <BLuebox />
      <Client />
      <div style={{ backgroundColor: "#f4f9fd" }}>
        <Service />
        <Bluebox2 />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
