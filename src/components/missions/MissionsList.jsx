import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import MissionRow from './MissionRow';

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
        <MissionRow key={mission.missionId} mission={mission} />
      ))}
    </tbody>
  </Table>
);

MissionsList.propTypes = {
  missions: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default MissionsList;
