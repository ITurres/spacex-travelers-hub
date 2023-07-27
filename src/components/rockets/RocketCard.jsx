import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket, cancelRocket } from '../../redux/rockets/rockets-slice';

const RocketCard = ({ rocketProps }) => {
  const dispatch = useDispatch();

  const {
    id, name, description, flickrImages, reserved,
  } = rocketProps;

  const handleReserveRocket = () => {
    dispatch(reserveRocket(id));
  };

  const handleCancelRocket = () => {
    dispatch(cancelRocket(id));
  };

  return (
    <Card style={{ backgroundColor: '#f8f9fa' }}>
      <div className="row">
        <div className="col-lg-4 col-xl-3">
          <Card.Img variant="bottom" src={flickrImages[0]} />
        </div>
        <div className="col-lg-8 col-xl-9">
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text style={{ maxHeight: '221px', overflow: 'auto', color: 'var(--blue)' }}>
              {reserved && (
                <Badge variant="info" className="mb-2">
                  Reserved
                </Badge>
              )}
              &nbsp;
              {description}
            </Card.Text>
            {reserved ? (
              <Button variant="outline-danger" onClick={handleCancelRocket}>
                Cancel Reservation
              </Button>
            ) : (
              <Button variant="outline-primary" onClick={handleReserveRocket}>
                Reserve Rocket
              </Button>
            )}
          </Card.Body>
        </div>
      </div>
    </Card>
  );
};

RocketCard.defaultProps = {
  rocketProps: {},
  id: 0,
  name: '',
  description: '',
  flickrImages: [],
};

RocketCard.propTypes = {
  rocketProps: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    flickrImages: PropTypes.arrayOf(PropTypes.string),
    reserved: PropTypes.bool,
  }),
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  flickrImages: PropTypes.arrayOf(PropTypes.string),
};

export default RocketCard;
