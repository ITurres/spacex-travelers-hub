import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

const MissionsList = ({ missions }) => (
  <Table striped bordered responsive="sm">
    <thead>
      <tr>
        <th>Mission</th>
        <th>Description</th>
        <th>Status</th>
        <th>&nbsp;</th>
      </tr>
    </thead>
    <tbody>
      {missions.map((mission) => (
        <tr key={mission.missionId}>
          <td>
            <strong>{mission.missionName}</strong>
          </td>
          <td>{mission.description}</td>
          <td className="p-3">STATUS BADGE</td>
          <td className="p-3">JOIN MISSION BUTTON</td>
        </tr>
      ))}
    </tbody>
  </Table>
);

MissionsList.propTypes = {
  missions: PropTypes.arrayOf(
    PropTypes.shape({
      missionId: PropTypes.string.isRequired,
      missionName: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default MissionsList;
