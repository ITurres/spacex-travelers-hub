import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Row, Col, ListGroup, Button,
} from 'react-bootstrap';
import {
  cancelRocket,
  filterReservedRockets,
} from '../redux/rockets/rockets-slice';
import {
  leaveMission,
  filterReservedMissions,
} from '../redux/missions/missions-slice';

const ProfilePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterReservedMissions());
    dispatch(filterReservedRockets());
  }, [dispatch]);

  const handleMissionLeave = (missionId) => {
    dispatch(leaveMission(missionId));
  };

  const handleCancelRocket = (id) => {
    dispatch(cancelRocket(id));
  };

  const { filteredRockets } = useSelector((state) => state.rockets);
  const { filteredMissions } = useSelector((state) => state.missions);

  return (
    <Row>
      <Col>
        <h2>My Missions</h2>
        <ListGroup>
          {filteredMissions.length > 0 ? (
            filteredMissions.map(({ missionId, missionName }) => (
              <ListGroup.Item
                key={missionId}
                className="d-flex justify-content-between align-items-center"
              >
                <span>{missionName}</span>
                <Button
                  variant="outline-danger"
                  onClick={() => handleMissionLeave(missionId)}
                  className="ms-3"
                >
                  Cancel Reservation
                </Button>
              </ListGroup.Item>
            ))
          ) : (
            <ListGroup.Item className="text-center">
              You haven&apos;t reserved any missions yet.
            </ListGroup.Item>
          )}
        </ListGroup>
      </Col>
      <Col>
        <h2>My Rockets</h2>
        <ListGroup>
          {filteredRockets.length > 0 ? (
            filteredRockets.map(({ id, name }) => (
              <ListGroup.Item
                key={id}
                className="d-flex justify-content-between align-items-center"
              >
                <span>{name}</span>
                <Button
                  variant="outline-danger"
                  onClick={() => handleCancelRocket(id)}
                  className="ms-3"
                >
                  Cancel Reservation
                </Button>
              </ListGroup.Item>
            ))
          ) : (
            <ListGroup.Item className="text-center">
              You haven&apos;t reserved any rockets yet.
            </ListGroup.Item>
          )}
        </ListGroup>
      </Col>
    </Row>
  );
};

export default ProfilePage;
