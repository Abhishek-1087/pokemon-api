import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/Home/HomePage';
import PokemonDetails from './components/PokemonDetails/PokemonDetails';

const App: React.FC = () => {
  return (
    <div id="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pokemon/:id" element={<PokemonDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
