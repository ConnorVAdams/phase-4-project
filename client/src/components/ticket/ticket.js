import { Card, Button, Dropdown } from 'react-bootstrap';
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

  return (
    concert ? (
      <>
        <ViewTicketModal show={showModal} handleClose={handleCloseModal} />
        <Card className="text-center my-3">
          <Card.Header>{concert.date}</Card.Header>
          <Card.Body>
            <Card.Title>{concert.artist.name}</Card.Title>
            <Card.Text>
              {concert.venue.name}
            </Card.Text>
            <Card.Text>
              {concert.venue.location} | {concert.time}
            </Card.Text>
                <Dropdown drop="end">

                  <Dropdown.Toggle variant="dark">
                    Options
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => removeFromUserTickets(ticket.id)} className="mx-2" variant="danger">Sell Ticket</Dropdown.Item>
                    <Dropdown.Item className="mx-2" variant="warning" disabled>Transfer</Dropdown.Item>
                  </Dropdown.Menu>

                </Dropdown>
                <div className="d-grid gap-2 mt-3">
                  <Button c onClick={showTicketModal} variant="primary" size="lg" >View Ticket</Button>
                </div>
          </Card.Body>
        </Card>
      </>
    ) : " "
  );
}

export default Ticket