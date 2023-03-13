import React from 'react';
import Navbar from './components/base/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/base/Footer'
import Index from './pages/Index';
import Univers from './pages/Univers';
import Activites from './pages/Activites';
import Chambre from './pages/Chambre';
import SignUp from './pages/Signup';
import Admin from './pages/admin/index'


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/Index' element={<Index/>}/>
        <Route path='/Univers' element={<Univers/>}/>
        <Route path='/Activites' element={<Activites/>}/>
        <Route path='/Chambre' element={<Chambre/>}/>
        <Route path='/Sign-up' element={<SignUp/>}/>
        <Route path='/Admin' element={<Admin/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;