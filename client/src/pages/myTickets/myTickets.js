import { useOutletContext } from "react-router-dom";
import Ticket from "../../components/ticket";
import { Container, Row, Col } from 'react-bootstrap'
import ModelJumbotron from '../../components/modelJumbotron'

const MyTickets = () => {

    const { userTickets }  = useOutletContext()

    return (
        <>
            <ModelJumbotron image="./assets/jumbotron-concert-photo.jpg" text="My Tickets" />
            <Container className="my-5">
                <Row>
                    <Col>
                        {userTickets ? userTickets.map((ticket, i) => {
                            return <Ticket key={ticket.id} ticket={ticket} />
                        }): ""}
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default MyTickets