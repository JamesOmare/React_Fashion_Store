import React from 'react';
import { Link, Route, Routes, useNavigate, useSearchParams } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
    <div>
      {/* Switch -> Routes */}
       <Routes>
        <Route  path='/' element={<HomePage/>}/>
        <Route path='/hats' element={<HatsPage/>} />
        </Routes>
    </div>
  );
}

export default App;
