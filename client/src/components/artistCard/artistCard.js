import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const ArtistCard = ({ id, name, genre }) => {
    return (
        <Card className="text-center my-5">
            <Card.Header><i className="fa fa-music"></i> {genre}</Card.Header>
            <Card.Img src="./assets/artist_placeholder.png" className="img-fluid"/>
            <Card.Body>
                <Card.Title className="display-4">{name}</Card.Title>
                <Link to={`/artists/${id}`}>
                    <Button variant="primary">View Tour Dates</Button>
                </Link>
            </Card.Body>
        </Card>
    );
}

export default ArtistCard