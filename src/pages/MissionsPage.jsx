import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../redux/missions/missions-slice';
import MissionsList from '../components/missions/MissionsList';

let readyToFetch = true;

const MissionsPage = () => {
  const dispatch = useDispatch();
  const { missions, isLoading, error } = useSelector((state) => state.missions);

  useEffect(() => {
    if (!readyToFetch) return;
    readyToFetch = false;
    dispatch(fetchMissions());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="display-when-non-list container">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="display-when-non-list container">
        <h1>{error}</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <MissionsList missions={missions} />
    </div>
  );
};
export default MissionsPage;
