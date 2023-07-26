import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../../redux/missions/missions-slice';

const MissionRow = ({ mission }) => {
  const dispatch = useDispatch();

  const {
    missionId, missionName, description, reserved,
  } = mission;

  const handleMissionJoin = () => {
    dispatch(joinMission(missionId));
  };

  const handleMissionLeave = () => {
    dispatch(leaveMission(missionId));
  };

  return (
    <tr key={missionId}>
      <td>
        <strong>{missionName}</strong>
      </td>
      <td>{description}</td>
      <td className="p-3">STATUS BADGE</td>
      <td className="p-3">
        {reserved ? (
          <Button
            variant="outline-danger"
            size="sm"
            onClick={handleMissionLeave}
          >
            Leave Mission
          </Button>
        ) : (
          <Button
            variant="outline-secondary"
            size="sm"
            onClick={handleMissionJoin}
          >
            Join Mission
          </Button>
        )}
      </td>
    </tr>
  );
};

MissionRow.propTypes = {
  mission: PropTypes.shape({
    missionId: PropTypes.string.isRequired,
    missionName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
  }).isRequired,
};

export default MissionRow;
