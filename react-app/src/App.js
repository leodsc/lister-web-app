import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

// components
import HeaderFooter from './components/HeaderFooter';

// pages
import Login from './pages/Login';
import Signup from './pages/Signup';
import Faq from './pages/Faq';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeaderFooter />} >
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="faq" element={<Faq />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
