import { useOutletContext } from "react-router-dom";
import Header from "../../components/header/header"
import Ticket from "../../components/ticket";
import { Container, Row, Col } from 'react-bootstrap'

const MyTickets = () => {

    const { userTickets }  = useOutletContext()

    return (
        <>
            <Header text="My Tickets" />
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