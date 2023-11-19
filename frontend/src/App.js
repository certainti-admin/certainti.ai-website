
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './Navbar/Navbar';
 import {BrowserRouter, Routes, Route } from 'react-router-dom';
 import About_us from './Pages/About_us/About_us';
 import Client from './Pages/Clients/Client';
 import Pricing from './Pages/Pricing/Pricing';
 import Product from './Pages/Product/Product';
 import Solution from './Pages/Solutions/Solution';
 import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About_us" element={<About_us />} />
      <Route path="/Client" element={<Client />} />
      <Route path="/Pricing" element={<Pricing />} />
      <Route path="/Product" element={<Product/>} />
      <Route path="/Solution" element={<Solution/>} />
     
      </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
