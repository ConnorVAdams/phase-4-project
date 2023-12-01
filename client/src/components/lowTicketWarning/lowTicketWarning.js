import Alert from 'react-bootstrap/Alert';

const LowTicketWarning = () => {
    return (
        <Alert variant="warning">
            <Alert.Heading><i className="fas fa-exclamation-triangle"></i> Low Tickets!</Alert.Heading>
        </Alert>
    );
};

export default LowTicketWarning;
