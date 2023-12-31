import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import Header from './components/header';
import RocketsPage from './pages/RocketPage';
import MissionsPage from './pages/MissionsPage';
import { fetchRockets } from './redux/rockets/rockets-slice';
import ProfilePage from './pages/ProfilePage';

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

      <main className="container my-3 blue">
        <Routes>
          <Route path="/" element={<RocketsPage state={state} />} />
          <Route path="/spacex-travelers-hub/" element={<RocketsPage state={state} />} />
          <Route path="/spacex-travelers-hub/missions" element={<MissionsPage />} />
          <Route path="/spacex-travelers-hub/profile" element={<ProfilePage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
