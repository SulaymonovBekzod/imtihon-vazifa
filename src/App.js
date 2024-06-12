import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/login/Login';
import Afitsant from './components/afitsant/Afitsant';
import Taomlar from './components/taomlar/Taomlar';
import Ichimliklar from './components/ichimliklar/Ichimliklar';
import Salatlar from './components/salatlar/Salatlar';
import Korzinka from './components/korzinka/Korzinka';
import NotFound from './components/notfound/NotFound';
import Oshpaz from './components/oshpaz/Oshpaz';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/afitsant' element={<Afitsant />} />
          <Route path='/taomlar' element={<Taomlar />} />
          <Route path='/ichimliklar' element={<Ichimliklar />} />
          <Route path='/salatlar' element={<Salatlar />} />
          <Route path='/korzinka' element={<Korzinka />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/' element={<Login />} />
          <Route path='/oshpaz' element={<Oshpaz />}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
