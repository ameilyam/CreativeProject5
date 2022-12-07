import './App.css';
import NavBar from "./NavBar.js"
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import Signs from './Signs.js';
import Journals from './Journals.js'
import OtherArt from './OtherArt.js';
import DigitalDesigns from './DigitalDesigns.js'

function App() {
  return (
    <div data-theme="cupcake" className="App">
      <Router>
      <NavBar />
      <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/signs' element={<Signs/>} />
          <Route path='/journals' element={<Journals/>} />
          <Route path='/otherArt' element={<OtherArt/>} />
          <Route path='/digitalDesigns' element={<DigitalDesigns/>} />
      </Routes>
      </Router>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <a className="footerLink" href = "https://github.com/ameilyam/CreativeProject5.git">Github Link</a>
        </div>
      </footer>
      {/* <header class="header">
        <NavBar/>
      </header>
      <h2>
          Welcome  to  Designs Meez!
      </h2> */}
    </div>
  );
}

export default App;
