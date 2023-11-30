import { Card, ListGroup, Button } from 'react-bootstrap';
import formatDateString from '../../util/formatDate';
import { useOutletContext } from 'react-router-dom';
import LowTicketWarning from '../lowTicketWarning/lowTicketWarning';
import BuyTicketModal from '../buyTicketModal/buyTicketModal';
import { useState } from 'react'
import sortByDate from '../../util/sortByDate'
import triggerConfetti from '../../util/confettiEffect';

const ArtistConcertsCard = ({ concerts }) => {

    concerts = concerts.sort(sortByDate)

    const { addToUserTickets } = useOutletContext()

    const [showModal, setShowModal] = useState(false); // State to control modal visibility

    const handleShowModal = () => setShowModal(true); // Function to show the modal
    const handleCloseModal = () => setShowModal(false); // Function to hide the modal

    const addConcert = (e) => {
        const [ concert ] = concerts.filter(concert => concert.id === Number(e.target.dataset.concert_id))
        console.log(concert)
        addToUserTickets(concert)
        handleShowModal()
        triggerConfetti()
    }

    return (
        <>
        <Card className="text-center">
            <Card.Header>Tour Schedule</Card.Header>
            <ListGroup variant="flush">
                {concerts ? concerts.map((concert, i) => {
                    return (
                        <ListGroup.Item key={i} className="lead">
                            <b>{formatDateString(concert.date)}</b>
                            <p>
                                {concert.venue.location} | {concert.venue.name}
                            </p>
                            {concert.tix_low ? <LowTicketWarning /> : ''}
                            <div className="d-grid gap-2">
                                {concert.sold_out ? 
                                <Button variant="dark" disabled >Sold Out</Button>
                                :
                                <Button onClick={addConcert} data-concert_id={concert.id} variant="primary">Buy Tickets</Button>
                                }
                            </div>
                        </ListGroup.Item>
                    )
                }) : ""}
            </ListGroup>
        </Card>
        <BuyTicketModal show={showModal} handleClose={handleCloseModal} />
        </>
    );
}

export default ArtistConcertsCard