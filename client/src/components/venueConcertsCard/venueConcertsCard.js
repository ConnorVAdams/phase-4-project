import { Card, ListGroup, Button } from 'react-bootstrap';
import formatDateString from '../../util/formatDate';
import { useOutletContext } from 'react-router-dom';

const VenueConcertsCard = ({concerts}) => {

    const { addToUserTickets } = useOutletContext()

    function addConcert(e){
        const [ concert ] = concerts.filter(concert => concert.id === Number(e.target.dataset.id))
        addToUserTickets(concert)
    }

    return (
        <Card>
            <Card.Header>Upcoming Events</Card.Header>
            <ListGroup variant="flush">
                {concerts ? concerts.map((concert, i) => {
                    return (
                        <ListGroup.Item key={i} className="lead">

                            <b>{formatDateString(concert.date)}</b>

                            <p className="display-6">{concert.artist.name}</p>

                            <p>Doors: {concert.time}</p>

                            <Button onClick={addConcert} data-id={concert.id} variant="primary">Buy tickets</Button>

                        </ListGroup.Item>
                    )
                }) : ""}
            </ListGroup>
        </Card>
    );
}

export default VenueConcertsCard