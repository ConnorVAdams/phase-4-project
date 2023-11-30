import Alert from 'react-bootstrap/Alert';

const LowTicketWarning = () => {
    return (
        <Alert variant="warning">
            <Alert.Heading><i class="fas fa-exclamation-triangle"></i> Low Tickets Alert!</Alert.Heading>
        </Alert>
    );
};

export default LowTicketWarning;
