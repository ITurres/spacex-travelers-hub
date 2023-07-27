// rockets component
import React from 'react';
import PropTypes from 'prop-types';
import Rocketslist from '../components/rockets/RocketList';

const Rockets = ({ state }) => <Rocketslist rocketList={state} />;

Rockets.propTypes = {
  state: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string,
      flickrImages: PropTypes.arrayOf(PropTypes.string),
    }),
  ).isRequired,
};

export default Rockets;
