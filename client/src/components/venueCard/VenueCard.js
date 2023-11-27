import { Card } from 'react-bootstrap';

const VenueCard = ({name, location}) => {
    return (
        <Card className="text-center">
          <Card.Img variant="top" src="./assets/venue_placeholder.png" />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
                <i className="fa fa-map-marker-alt" style={{color: "orangered"}}></i> {location}
            </Card.Text>
          </Card.Body>
        </Card>
      );
}

export default VenueCard