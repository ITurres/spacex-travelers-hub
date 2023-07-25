import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const RocketCard = ({ rocketProps }) => {
  const {
    name,
    description,
    flickrImages,
  } = rocketProps;

  return (
    <Card>
      <div className="row">
        <div className="col-lg-4 col-xl-3">
          <Card.Img variant="bottom" src={flickrImages[0]} />
        </div>
        <div className="col-lg-8 col-xl-9">
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text style={{ maxHeight: '221px', overflow: 'auto' }}>
              {description}
            </Card.Text>
            <Button variant="outline-primary">Reserve Rocket</Button>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
};

RocketCard.defaultProps = {
  rocketProps: {},
  name: '',
  description: '',
  flickrImages: [],
};

RocketCard.propTypes = {
  rocketProps: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    flickrImages: PropTypes.arrayOf(PropTypes.string),
  }),
  name: PropTypes.string,
  description: PropTypes.string,
  flickrImages: PropTypes.arrayOf(PropTypes.string),
};

export default RocketCard;
