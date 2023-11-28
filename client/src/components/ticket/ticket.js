import { Card, Button } from 'react-bootstrap';

const Ticket = ({concert}) => {
    return (
        <Card className="text-center">
          <Card.Header>Date</Card.Header>
          <Card.Body>
            <Card.Title>Artist Name</Card.Title>
            <Card.Text>
              City | Location | Time
            </Card.Text>
            <Button className="mx-2" variant="outline-danger">Sell Ticket</Button>
            <Button className="mx-2" variant="warning" disabled>Transfer</Button>
          </Card.Body>
        </Card>
      );
}

export default Ticket