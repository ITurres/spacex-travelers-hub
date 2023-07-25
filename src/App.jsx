import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import Header from './components/header';
import RocketsPage from './pages/rockets';
import { fetchRockets } from './redux/rockets/rockets-slice';

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.rockets.rockets);

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <>
      <header>
        <Header />
      </header>

      <main className="container my-3">
        <Routes>
          <Route path="/" element={<RocketsPage state={state} />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
