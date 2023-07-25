import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../../redux/rockets/rockets-slice';

const RocketCard = ({ rocketProps }) => {
  const dispatch = useDispatch();

  const {
    id,
    name,
    description,
    flickrImages,
    reserved,
  } = rocketProps;

  const handleReserveRocket = () => {
    dispatch(reserveRocket(id));
  };

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
            {!reserved && (
              <Button variant="outline-primary" onClick={handleReserveRocket}>
                Reserve Rocket
              </Button>
            )}
            {reserved && <p>Rocket reserved!</p>}
          </Card.Body>
        </div>
      </div>
    </Card>
  );
};

RocketCard.defaultProps = {
  rocketProps: {},
  id: '',
  name: '',
  description: '',
  flickrImages: [],
};

RocketCard.propTypes = {
  rocketProps: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    flickrImages: PropTypes.arrayOf(PropTypes.string),
    reserved: PropTypes.bool,
  }),
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  flickrImages: PropTypes.arrayOf(PropTypes.string),
};

export default RocketCard;
