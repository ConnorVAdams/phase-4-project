import { Card, ListGroup, Button } from 'react-bootstrap';
import formatDateString from '../../util/formatDate';

const ArtistConcertsCard = ({ concerts }) => {

    console.log(concerts)

    return (
        <Card>
            <Card.Header>Tour Schedule</Card.Header>
            <ListGroup variant="flush">
                {concerts ? concerts.map((concert, i) => {
                    return (
                        <ListGroup.Item key={i} className="lead">
                            <b>{formatDateString(concert.date)}</b>
                            <p>
                                <i className="fa fa-city" style={{ color: "grey" }}></i>
                                {' '}{concert.venue.location}
                            </p>
                            <p>
                                <i className="fa fa-map-marker-alt" style={{ color: "orangered" }}></i>
                                {' '}{concert.venue.name}
                            </p>
                            <Button variant="primary">Buy Tickets</Button>
                        </ListGroup.Item>
                    )
                }) : ""}
            </ListGroup>
        </Card>
    );
}

export default ArtistConcertsCard