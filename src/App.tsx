import React from 'react';
import { CardContainer } from './components/CardContainer';
import { Header } from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CardsHome } from './components/CardsHome';
import { Character } from './components/CardInformation/Character';
import { SearchModal } from './components/Modal/SearchModal';
import { CharactersProvider } from './context/CharactersContext';

function App() {
  return (
    <BrowserRouter>
      <CharactersProvider>
        <Header />
        <CardContainer>
          <Routes>
            <Route path='/' element={<CardsHome />} />
            <Route path='/character' element={<Character />} />
          </Routes>
        </CardContainer>
        <SearchModal />
      </CharactersProvider>
    </BrowserRouter>
  );
}

export default App;
