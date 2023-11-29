import { Card, Button } from 'react-bootstrap';
import { useOutletContext } from 'react-router-dom';

const Ticket = ({ticket}) => {

  const { removeFromUserTickets } = useOutletContext()

  const { concert } = ticket

    return (
        <Card className="text-center">
          <Card.Header>{concert.date}</Card.Header>
          <Card.Body>
            <Card.Title>{concert.artist.name}</Card.Title>
            <Card.Text>
              {concert.venue.name} | {concert.venue.location} | {concert.time}
            </Card.Text>
              <Button onClick={() =>removeFromUserTickets(ticket.id)} className="mx-2" variant="outline-danger">Sell Ticket</Button>
              <Button className="mx-2" variant="warning" disabled>Transfer</Button>
          </Card.Body>
        </Card>
      );
}

export default Ticket