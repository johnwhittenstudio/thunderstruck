import React from 'react';
import './App.css';
import Navbar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './../src/components/Home/Home';
import About from './../src/components/About/About';
import BookIndex from './../src/components/Book/BookIndex';
import Book from './../src/components/Book/Book';
import Zine1 from './../src/components/Book/Zine1';
import Zine2 from './../src/components/Book/Zine2';
import Zine3 from './../src/components/Book/Zine3';
import Zine4 from './../src/components/Book/Zine4';
import Zine5 from './../src/components/Book/Zine5';
import Zine6 from './../src/components/Book/Zine6';
import InfoMap from './../src/components/Book/InfoMap';
import Artists from './../src/components/Artists/ArtistCards';
import Exhibitions from './../src/components/Exhibitions/ExhibitionsIndex';
import ExhibitionsTS1 from './../src/components/Exhibitions/ExhibitionsTS1';
import ExhibitionsTS2 from './../src/components/Exhibitions/ExhibitionsTS2';
import Shop from './../src/components/Shop/Shop';
import Trips from './../src/components/Trips/Trips';
import TripsTLF from './../src/components/Trips/TripOne';
import TripsTST from './../src/components/Trips/TripTwo';
import Press from './../src/components/Press/Press';



function App() {
return (
  <>
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/artists' element={<Artists/>} />
        <Route path='/books' element={<BookIndex/>} />
        <Route path='/books/book' element={<Book/>} />
        <Route path='/books/zine1' element={<Zine1/>} />
        <Route path='/books/zine2' element={<Zine2/>} />
        <Route path='/books/zine3' element={<Zine3/>} />
        <Route path='/books/zine4' element={<Zine4/>} />
        <Route path='/books/zine5' element={<Zine5/>} />
        <Route path='/books/zine6' element={<Zine6/>} />
        <Route path='/books/info-map' element={<InfoMap/>} />
        <Route path='/exhibitions' element={<Exhibitions/>} />
        <Route path='/exhibitions/ts1' element={<ExhibitionsTS1/>} />
        <Route path='/exhibitions/ts2' element={<ExhibitionsTS2/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/trips' element={<Trips/>} />
        <Route path='/trips/tlf' element={<TripsTLF/>} />
        <Route path='/trips/tst' element={<TripsTST/>} />
        <Route path='/press' element={<Press/>} />
    </Routes>
    </Router>
    <Footer />
  </>
);
}
  
export default App;