import Header from "../../components/header"
import VenueCard from "../../components/venueCard/VenueCard"
import { useFetch } from '../../hooks/customHooks'
import { Container, Row, Col } from 'react-bootstrap'
import { useState } from 'react'
import SearchBar from "../../components/searchBar/searchBar"

const URL = 'http://127.0.0.1:5000/api/v1/venues'


const Venues = () => {

    const { data } = useFetch(URL)

    let [ searchTerm, setSearchTerm ] = useState('')

    const changeSearchTerm = (e) => {
        setSearchTerm(e.target.value)
    }

    const filteredVenues = data
        .filter(venue => {
            return searchTerm ? venue.name.toLowerCase().includes(searchTerm) : venue
        })

    return (
        <>
            <Header text='All Venues' />
            <Container>
                <Row>
                    <Col>
                        <SearchBar label="Search Venues By Name" searchTerm={changeSearchTerm} />
                    </Col>
                </Row>
                <Row>
                    {filteredVenues.map(({ id, name, location }) => (
                        <Col md={3} key={id}>
                            <VenueCard id={id} name={name} location={location} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}

export default Venues