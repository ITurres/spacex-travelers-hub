import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/header';
import RocketsPage from './pages/rockets';

function App() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main className="container my-3">
        <Routes>
          <Route path="/" element={<RocketsPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
