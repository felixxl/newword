import React from 'react';
import Navbar from './components/base/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/base/Footer'
import Home from './pages';
import Info from './pages/info';
import Activites from './pages/activites';
import Contact from './pages/contact';
import SignUp from './pages/signup';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/info' element={<Info/>} />
        <Route path='/activites' element={<Activites/>} />
        <Route path='/contact-us' element={<Contact/>} />
        <Route path='/sign-up' element={<SignUp/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;