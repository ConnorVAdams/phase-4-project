import { Modal, Button } from 'react-bootstrap';
import { v4 as uuid } from "uuid";
import { Link } from 'react-router-dom'

const BuyTicketModal = ({ show, handleClose }) => {

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Thank you for your purchase!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Order Number: {uuid()}</p>
                <p className="lead">
                    Your tickets for have been successfully booked. We're excited that you'll be joining us for an unforgettable night of music and entertainment!
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Link to='/myTickets'>
                    <Button variant="info" onClick={handleClose}>
                        View My Tickets
                    </Button>
                </Link>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default BuyTicketModal;