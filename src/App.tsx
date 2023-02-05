import React from 'react';
import { CardContainer } from './components/CardContainer';
import { Header } from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CardsHome } from './components/CardsHome';
import { Character } from './components/CardInformation/Character';
import { SearchModal } from './components/Modal/SearchModal';

function App() {
  return (
    <>
      <Header />
      <CardContainer>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<CardsHome />} />
            <Route path='/character' element={<Character />} />
          </Routes>
        </BrowserRouter>
      </CardContainer>
      <SearchModal />
    </>
  );
}

export default App;
