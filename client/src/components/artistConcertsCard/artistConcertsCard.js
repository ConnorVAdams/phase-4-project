import { Card, ListGroup, Button } from 'react-bootstrap';
import formatDateString from '../../util/formatDate';
import { useOutletContext } from 'react-router-dom';
import LowTicketWarning from '../lowTicketWarning/lowTicketWarning';
import BuyTicketModal from '../buyTicketModal/buyTicketModal';
import { useState } from 'react'


const ArtistConcertsCard = ({ concerts }) => {

    const { addToUserTickets } = useOutletContext()

    const [showModal, setShowModal] = useState(false); // State to control modal visibility

    const handleShowModal = () => setShowModal(true); // Function to show the modal
    const handleCloseModal = () => setShowModal(false); // Function to hide the modal

    const addConcert = (e) => {
        const [ concert ] = concerts.filter(concert => concert.id === Number(e.target.dataset.concert_id))
        addToUserTickets(concert)
        handleShowModal()
    }

    return (
        <>
        <Card>
            <Card.Header>Tour Schedule</Card.Header>
            <ListGroup variant="flush">
                {concerts ? concerts.map((concert, i) => {
                    console.log(concert)
                    return (
                        <>
                        <ListGroup.Item key={i} className="lead">
                            <b>{formatDateString(concert.date)}</b>
                            <p>
                                <i className="fa fa-map-marker-alt" style={{ color: "orangered" }}></i>
                                {' '}{concert.venue.location}
                                {' '}| 
                                {' '}{concert.venue.name}
                            </p>
                            {concert.tix_low ? <LowTicketWarning /> : ''}
                            {concert.sold_out ? 
                            <Button variant="dark" disabled >Sold Out</Button>
                            :
                            <Button onClick={addConcert} data-concert_id={concert.id} variant="primary">Buy Tickets</Button>
                        }
                        </ListGroup.Item>
                        <BuyTicketModal show={showModal} handleClose={handleCloseModal} concert={concert ? concert : null} />
                        </>
                    )
                }) : ""}
            </ListGroup>
        </Card>
        
        </>
    );
}

export default ArtistConcertsCard