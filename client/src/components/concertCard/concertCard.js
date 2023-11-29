import { Card, Button, ListGroup } from 'react-bootstrap';
import { useOutletContext } from 'react-router-dom';
import { useState } from 'react'
import BuyTicketModal from '../buyTicketModal/buyTicketModal';

const ConcertCard = ({event}) => {

    
    const { addToUserTickets } = useOutletContext()
    
    const [showModal, setShowModal] = useState(false); // State to control modal visibility
    
    const handleShowModal = () => setShowModal(true); // Function to show the modal
    const handleCloseModal = () => setShowModal(false); // Function to hide the modal
    
    const artistName = event.artist.name
    const venueName = event.venue.name
    const venueLocation = event.venue.location
    
    function addConcert(){
        console.log(event)
        addToUserTickets(event)
        handleShowModal()
    }
    
    return (
        <>
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
        <BuyTicketModal show={showModal} handleClose={handleCloseModal} />
        </>
    );
}

export default ConcertCard