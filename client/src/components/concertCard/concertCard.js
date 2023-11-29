import { Card, Button } from 'react-bootstrap';
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
            <Card.Body>
                <Card.Title className="display-4">{artistName}</Card.Title>
                <Card.Text className="lead">{event.date}</Card.Text>
                <Card.Text>
                    <i className="fa fa-map-marker-alt" style={{color: "orangered"}}></i> {venueName} | <i className="fa fa-city" style={{color: "grey"}}></i> {venueLocation} | <i className="fa fa-clock" style={{color: "black"}}></i> Doors: {event.time}
                </Card.Text>
                <Button onClick={addConcert} variant="primary">Buy tickets</Button>
            </Card.Body>
        </Card>
    );
}

export default ConcertCard