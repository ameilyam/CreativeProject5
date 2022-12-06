import './App.css';
import NavBar from "./NavBar.js"
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './Pages/Home.js';
import About from './Pages/About.js';
import Contact from './Pages/Contact.js';
import Signs from './Pages/Signs.js';
import Journals from './Pages/Journals.js'
import OtherArt from './Pages/OtherArt.js';
import DigitalDesigns from './Pages/DigitalDesigns.js'

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
