import React from 'react';
import './App.css';

// import Button from '@mui/material/Button'
// import BoltTwoToneIcon from '@mui/icons-material/BoltTwoTone'
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Navbar from './components/Navbar/NavBar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './../src/components/Home/Home';
import About from './../src/components/About/About';
import Book from './../src/components/Book/Book';
import Artists from './components/Artists/Artists';
import Exhibitions from './../src/components/Exhibitions/index';
import Shop from './../src/components/Shop/Shop';
import Trips from './../src/components/Trips/Trips';
import TripsTLF from './../src/components/Trips/TripOne';
import TripsTST from './../src/components/Trips/TripTwo';



function App() {
return (
  <>
    <Router>
    <Navbar />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/artists' element={<Artists/>} />
        <Route path='/book' element={<Book/>} />
        <Route path='/exhibitions' element={<Exhibitions/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/trips' element={<Trips/>} />
        <Route path='/trips/tlf' element={<TripsTLF/>} />
        <Route path='/trips/tst' element={<TripsTST/>} />
    </Routes>
    </Router>
    {/* <Button onClick={()=>alert('Take a shot of Fireball')} 
      startIcon={<BoltTwoToneIcon color="error" />}
      endIcon={<BoltTwoToneIcon color="error" />}
      size="small" 
      style={{
        fontSize: 12,
      }}
      color="error" >
      Feeling Lucky
    </Button> */}
    {/* <IconButton color="primary" aria-label="add to shopping cart">
      <AddShoppingCartIcon />
    </IconButton> */}
  </>
);
}
  
export default App;