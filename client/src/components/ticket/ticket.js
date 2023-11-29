import { Card, Button } from 'react-bootstrap';
import { useOutletContext } from 'react-router-dom';
import { useState } from 'react'
import ViewTicketModal from '../viewTicketModal/viewTicketModal';

const Ticket = ({ ticket }) => {

  const { removeFromUserTickets } = useOutletContext()

  const { concert } = ticket

  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  const handleShowModal = () => setShowModal(true); // Function to show the modal
  const showTicketModal = () => handleShowModal()
  const handleCloseModal = () => setShowModal(false); // Function to hide the modal

  console.log(ticket)

  return (
    concert ? (
      <>
        <ViewTicketModal show={showModal} handleClose={handleCloseModal} />
        <Card className="text-center my-3">
          <Card.Header>{concert.date}</Card.Header>
          <Card.Body>
            <Card.Title>{concert.artist.name}</Card.Title>
            <Card.Text>
              {concert.venue.name} | {concert.venue.location} | {concert.time}
            </Card.Text>
            <Button onClick={() => removeFromUserTickets(ticket.id)} className="mx-2" variant="outline-danger">Sell Ticket</Button>
            <Button onClick={showTicketModal} variant="primary">View Ticket</Button>
            <Button className="mx-2" variant="warning" disabled>Transfer</Button>
          </Card.Body>
        </Card>
      </>
    ) : " "
  );
}

export default Ticket