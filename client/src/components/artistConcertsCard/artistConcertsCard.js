import { Card, ListGroup, Button } from 'react-bootstrap';
import formatDateString from '../../util/formatDate';
import { useOutletContext } from 'react-router-dom';

const ArtistConcertsCard = ({ concerts }) => {

    const { addToUserTickets } = useOutletContext()

    const addConcert = (e) => {
        const [ concert ] = concerts.filter(concert => concert.id === Number(e.target.dataset.concert_id))
        addToUserTickets(concert)
        alert('concert has been added')
    }

    return (
        <Card>
            <Card.Header>Tour Schedule</Card.Header>
            <ListGroup variant="flush">
                {concerts ? concerts.map((concert, i) => {
                    return (
                        <ListGroup.Item key={i} className="lead">
                            <b>{formatDateString(concert.date)}</b>
                            <p>
                                <i className="fa fa-map-marker-alt" style={{ color: "orangered" }}></i>
                                {' '}{concert.venue.location}
                                {' '}| 
                                {' '}{concert.venue.name}
                            </p>
                            <Button onClick={addConcert} data-concert_id={concert.id} variant="primary">Buy Tickets</Button>
                        </ListGroup.Item>
                    )
                }) : ""}
            </ListGroup>
        </Card>
    );
}

export default ArtistConcertsCard