import { Modal } from 'react-bootstrap';

const ViewTicketModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Here is your ticket:</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src="./assets/fake_qr_code.png" alt="Modal Content" className="img-fluid" />
      </Modal.Body>
    </Modal>
  );
};

export default ViewTicketModal;