import React from 'react';
import Home from './pages/Home';
import Single from './pages/Single';
import New from './pages/New';
import List from './pages/List';

import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            
            <Route path='users'>
              <Route index element={<List />} />
              <Route path=':id' element={<Single title="Data Lengkap Orang Tua" />} />
              <Route path='new' element={<New title="Add New Members" />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;