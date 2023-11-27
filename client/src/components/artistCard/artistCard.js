import { Card, Button } from 'react-bootstrap';

const ArtistCard = ({ name, genre }) => {
    return (
        <Card className="text-center my-5">
            <Card.Header>{genre}</Card.Header>
            <Card.Body>
                <Card.Title className="display-4">{name}</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary" href="#">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

export default ArtistCard