import "bootstrap/dist/css/bootstrap.min.css"; // Importamos CSS
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Contacto from "./views/Contacto";

import Navbar from './components/Navbar';

import Footer from './components/Footer';

function App() {
  return (

    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
          
        </Routes>
        
       <br></br>
        <Footer />
      </BrowserRouter>

    </div>

  );
}
export default App;