import { Modal, Button } from 'react-bootstrap';

const FormSubmissionComponent = ({ show, handleClose, message }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Form Submission</Modal.Title>
            </Modal.Header>
            <Modal.Body>{message || 'Your form has been submitted successfully!'}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default FormSubmissionComponent;