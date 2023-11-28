import Header from "../../components/header"
import { useFetch } from '../../hooks/customHooks'
import { Container, Row, Col } from 'react-bootstrap'
import ConcertCard from "../../components/concertCard/concertCard"

const URL = "http://127.0.0.1:5000/api/v1/concerts"

const Concerts = () => {

    const { data } = useFetch(URL)

    console.log(data)

    return (
        <>
            <Header text='All Concerts' />
            <Container>
                <Row>
                {data.map((event, i) => {
                    return (
                        <Col md={4} key={i}>
                            <ConcertCard event={event} />
                        </Col>
                    )
                })}
                </Row>
            </Container>
        </>
    )
}

export default Concerts