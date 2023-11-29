import { Card, Button, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const VenueCard = ({ id, name, location }) => {
  return (
    <Card className="text-center my-5">
      <Card.Img variant="top" src="./assets/venue_placeholder.png" />
      <ListGroup>
        <ListGroup.Item>
          <Card.Title>{name}</Card.Title>
        </ListGroup.Item>
        <ListGroup.Item>
          <i className="fa fa-map-marker-alt" style={{ color: "orangered" }}></i> {location}
        </ListGroup.Item>
        <ListGroup.Item>
          <Link to={`/venues/${id}`}>
            <Button variant="primary">View Concerts</Button>
          </Link>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default VenueCard