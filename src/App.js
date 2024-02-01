import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Paginii/HomePage';
import Deceunick from './Paginii/Produse PVC/Deceunick';
import Gealan from './Paginii/Produse PVC/Gealan';
import Rehau from './Paginii/Produse PVC/Rehau';
import Deco from './Paginii/Produse PVC/Deco';
import Klass from './Paginii/Produse PVC/Klass';
import Salamander from './Paginii/Produse PVC/Salamander';


import Produse from './Paginii/Produse/Produse';

import Contact from './Paginii/Contact/Contact';
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';
import PlaseTantari from './Paginii/Produse/PlaseTantari';
import Rulouri from './Paginii/Produse/Rulouri';
import Pervaze from './Paginii/Produse/Pervaze';
import Jaluzele from './Paginii/Produse/Jaluzele';
import Montaje from './Paginii/Montaje/Montaje';

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar />
  
        <Routes>
        
          <Route path="/Home" element={<HomePage />} />
          <Route path="/Deceunick" element={<Deceunick />} />
          <Route path="/Gealan" element={<Gealan />} />
          <Route path="/Rehau" element={<Rehau />} />
          <Route path="/Deco" element={<Deco />} />
          <Route path="/Klass" element={<Klass />} />
          <Route path="/Salamander" element={<Salamander />} />
          <Route path="/Site" element={<PlaseTantari />} />
          <Route path="/Rulouri" element={<Rulouri />} />
          <Route path="/Pervaze" element={<Pervaze />} />
          <Route path="/Jaluzele" element={<Jaluzele />} />
          <Route path="/Montaje" element={<Montaje />} />

  
          <Route path="/produse" element={<Produse />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
