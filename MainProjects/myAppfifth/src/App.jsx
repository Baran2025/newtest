import { BrowserRouter, Routes,Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import  About  from './screens/About.jsx';
import Products from './screens/Products.jsx';
import  Gallery  from './screens/Gallery.jsx';
import Contact from './screens/Contact.jsx';
import  Home  from './screens/Home.jsx';

function App() {
 

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/products" element={<Products/>} />
      <Route path="/gallery" element={<Gallery/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
