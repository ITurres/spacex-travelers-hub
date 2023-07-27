import PropTypes from 'prop-types';
import { Button, Badge } from 'react-bootstrap';
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
      <td className="p-3" style={{ verticalAlign: 'middle' }}>
        {reserved ? (
          <Badge variant="info" bg="info">
            Active Member
          </Badge>
        ) : (
          <Badge variant="secondary" bg="secondary">
            NOT A MEMBER
          </Badge>
        )}
      </td>
      <td
        className="p-3"
        style={{
          minWidth: '140px',
          textAlign: 'center',
          verticalAlign: 'middle',
        }}
      >
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
