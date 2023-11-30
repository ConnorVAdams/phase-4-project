import { Card, ListGroup, Button } from 'react-bootstrap';
import formatDateString from '../../util/formatDate';
import { useOutletContext } from 'react-router-dom';
import LowTicketWarning from '../lowTicketWarning/lowTicketWarning';
import { useState } from 'react'
import BuyTicketModal from '../buyTicketModal/buyTicketModal';
import sortByDate from '../../util/sortByDate';
import triggerConfetti from '../../util/confettiEffect'

const VenueConcertsCard = ({ concerts }) => {
    

    if (concerts){
        concerts = concerts.sort(sortByDate)
    }

    const { addToUserTickets } = useOutletContext()

    function addConcert(e) {
        const [ concert ] = concerts.filter(concert => concert.id === Number(e.target.dataset.concert_id))
        addToUserTickets(concert)
        handleShowModal()
        triggerConfetti()
    }

    const [showModal, setShowModal] = useState(false); // State to control modal visibility
    const handleShowModal = () => setShowModal(true); // Function to show the modal
    const handleCloseModal = () => setShowModal(false); // Function to hide the modal

    return (
        <>

            <Card>
                <Card.Header>Upcoming Events</Card.Header>
                <ListGroup variant="flush">
                    {concerts ? concerts.map((concert, i) => {
                        return (
                            <ListGroup.Item key={i} className="lead py-4">

                                <b>{formatDateString(concert.date)}</b>

                                <p className="display-6">{concert.artist.name}</p>

                                <p>Doors: {concert.time}</p>

                                {concert.tix_low ? <LowTicketWarning /> : ''}

                                {concert.sold_out ?
                                    <Button variant="dark" disabled >Sold Out</Button>
                                    :
                                    <Button onClick={addConcert} data-concert_id={concert.id} variant="primary">Buy Tickets</Button>
                                }
                            </ListGroup.Item>
                        )
                    }) : ""}
                </ListGroup>
            </Card>
            <BuyTicketModal show={showModal} handleClose={handleCloseModal} />
        </>
    );
}

export default VenueConcertsCard