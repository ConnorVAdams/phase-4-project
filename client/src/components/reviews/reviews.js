import { Container, Row, Col, Card } from 'react-bootstrap';

const reviewData = [
  {
    name: "Sarah S.",
    reviewText: "I love this app. I know every concert that's going on my area because of it. Thank you, StageFinder!"
  },
  {
    name: "Hunter R.",
    reviewText: "As a music lover, this app can't be beat! I'm always in the know about what's happening in my city."
  },
  {
    name: "Austin B.",
    reviewText: "Stagefinder has been instrumental to my nightlife. I don't plan my weekends without checking the app!"
  }
]

const Reviews = () => {
    return (
        <Container className="my-5 py-5">
          <Row>
            {reviewData.map(({name, reviewText}, i) => (
              <Col md={4} key={i}>
                <Card className="mb-4 text-center bg-dark text-light">
                  <i className="fa fa-user-circle card-img-top text-center mt-4 fa-7x"></i>
                  <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    ⭐️ ⭐️ ⭐️ ⭐️ ⭐️
                    </Card.Text>
                    <Card.Text>
                      "{reviewText}"
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      );
}

export default Reviews