import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const VenueCard = ({id, name, location}) => {
    return (
        <Card className="text-center">
          <Card.Img variant="top" src="./assets/venue_placeholder.png" />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
                <i className="fa fa-map-marker-alt" style={{color: "orangered"}}></i> {location}
            </Card.Text>
            <Link to={`/venues/${id}`}>
                  <Button variant="primary">View Concerts</Button>
            </Link>
          </Card.Body>
        </Card>
      );
}

export default VenueCard