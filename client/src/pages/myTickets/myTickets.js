import { useOutletContext } from "react-router";
import Header from "../../components/header/header"
import Ticket from "../../components/ticket/ticket";
import { Container, Row, Col } from 'react-bootstrap'

const MyTickets = () => {

    const userTickets  = useOutletContext()
    console.log(userTickets)

    // console.log(userTickets)

    return (
        <>
            <Header text="My Tickets" />
            <Container className="my-5">
                <Row>
                    <Col>
                        <Ticket/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default MyTickets