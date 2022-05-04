import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Start from './Pages/Start';
import Quiz from './Pages/Quiz';
import End from './Pages/End';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Start />} />
      <Route path='/Quiz' element={<Quiz />} />
      <Route path='/End' element={<End />} />
    </Routes>
  );
}

export default App;
