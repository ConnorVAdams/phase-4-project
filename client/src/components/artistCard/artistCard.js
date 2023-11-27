import { Card, Button } from 'react-bootstrap';

const ArtistCard = ({ name, genre }) => {
    return (
        <Card className="text-center my-5">
            <Card.Header><i className="fa fa-music"></i> {genre}</Card.Header>
            <Card.Img src="./assets/artist_placeholder.png" className="img-fluid"/>
            <Card.Body>
                <Card.Title className="display-4">{name}</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary" href="#">View Concerts</Button>
            </Card.Body>
        </Card>
    );
}

export default ArtistCard