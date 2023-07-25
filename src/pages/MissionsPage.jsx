import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMissions } from '../redux/missions/missions-slice';

const MissionsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <div>
      <h1>Missions</h1>
    </div>
  );
};
export default MissionsPage;
