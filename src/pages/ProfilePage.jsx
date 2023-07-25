import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Row, Col, ListGroup, Button,
} from 'react-bootstrap';
import {
  cancelRocket,
  filterReservedRockets,
} from '../redux/rockets/rockets-slice';

const ProfilePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterReservedRockets());
  }, [dispatch]);

  const handleCancelRocket = (id) => {
    dispatch(cancelRocket(id));
  };

  const { filteredRockets } = useSelector((state) => state.rockets);

  return (
    <Row>
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

      <Col>{/* the mission should go here */}</Col>
    </Row>
  );
};

export default ProfilePage;
