import React from 'react';
import './App.css';
import Navbar from './components/Navbar/NavBar';
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './../src/components/Home/Home';
import About from './../src/components/About/About';
import Book from './../src/components/Book/Book';
import Artists from './../src/components/Artists/ArtistCards';
import Exhibitions from './../src/components/Exhibitions/ExhibitionsIndex';
import ExhibitionsTS1 from './../src/components/Exhibitions/ExhibitionsTS1';
import ExhibitionsTS2 from './../src/components/Exhibitions/ExhibitionsTS2';
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
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/artists' element={<Artists/>} />
        <Route path='/books' element={<Book/>} />
        <Route path='/exhibitions' element={<Exhibitions/>} />
        <Route path='/exhibitions/ts1' element={<ExhibitionsTS1/>} />
        <Route path='/exhibitions/ts2' element={<ExhibitionsTS2/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/trips' element={<Trips/>} />
        <Route path='/trips/tlf' element={<TripsTLF/>} />
        <Route path='/trips/tst' element={<TripsTST/>} />
    </Routes>
    </Router>
    <Footer />
  </>
);
}
  
export default App;