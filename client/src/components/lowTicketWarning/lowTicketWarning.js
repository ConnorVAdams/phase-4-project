import Alert from 'react-bootstrap/Alert';

const LowTicketWarning = () => {
    return (
        <Alert variant="danger">
            <Alert.Heading>Low Ticket Alert!</Alert.Heading>
            <p>
                Tickets are running low for this event! Don't miss your chance to attend - buy your tickets now!
            </p>
        </Alert>
    );
};

export default LowTicketWarning;
