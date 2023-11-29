import { Card, Button, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const ArtistCard = ({ id, name, genre }) => {
    return (
        <Card className="text-center my-5">
            <Card.Header><i className="fa fa-music"></i> {genre}</Card.Header>
            <Card.Img src="./assets/artist_placeholder.png" className="img-fluid"/>
            <ListGroup>
                <ListGroup.Item>
                    <Card.Title className="display-4">{name}</Card.Title>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Link to={`/artists/${id}`} >
                        <Button className="my-2" variant="info">View Tour Dates</Button>
                    </Link>
                </ListGroup.Item>
            </ListGroup>
        </Card>
    );
}

export default ArtistCard