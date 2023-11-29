import { Card, Button, ListGroup } from 'react-bootstrap';
import { useOutletContext } from 'react-router-dom';

const ConcertCard = ({event}) => {

    const { addToUserTickets } = useOutletContext()

    const artistName = event.artist.name
    const venueName = event.venue.name
    const venueLocation = event.venue.location

    function addConcert(){
        addToUserTickets(event)
    }
    
    return (
        <Card className="text-center my-5">
            <Card.Img src="./assets/concert_placeholder.png" className="img-fluid"/>
            <ListGroup>
                <ListGroup.Item>
                    <Card.Title className="display-4">{artistName}</Card.Title>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Card.Text className="lead">{event.date}</Card.Text>
                </ListGroup.Item>
                <ListGroup.Item className="mt-2">
                    <i className="fa fa-map-marker-alt" style={{color: "orangered"}}></i> <b>{venueLocation}</b> | {venueName}
                    <div className="my-2">Doors: {event.time}</div>
                </ListGroup.Item>
                <ListGroup.Item>
                    {event.sold_out ? 
                    <Button variant="dark" disabled >Sold Out</Button>
                    :
                    <Button onClick={addConcert} data-concert_id={event.id} variant="primary">Buy Tickets</Button>
                    }
                </ListGroup.Item>
            </ListGroup>
        </Card>
    );
}

export default ConcertCard