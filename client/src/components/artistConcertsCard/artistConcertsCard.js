import { Card, ListGroup, Button } from 'react-bootstrap';
import formatDateString from '../../util/formatDate';

const ArtistConcertsCard = ({ concerts }) => {

    console.log(concerts)

    return (
        <Card>
            <Card.Header>Upcoming Concerts</Card.Header>
            <ListGroup variant="flush">
                {concerts ? concerts.map((concert, i) => {
                    return (
                        <ListGroup.Item className="lead">
                            <b>{formatDateString(concert.date)}</b>
                            <p>
                                <i className="fa fa-city" style={{ color: "grey" }}></i>
                                {' '}{concert.venue.location}
                            </p>
                            <p>
                                <i className="fa fa-map-marker-alt" style={{ color: "orangered" }}></i>
                                {' '}{concert.venue.name}
                            </p>
                            <Button variant="primary">Purchase tickets</Button>
                        </ListGroup.Item>
                    )
                }) : ""}
            </ListGroup>
        </Card>
    );
}

export default ArtistConcertsCard