import Header from "../../components/header"
import { useFetch } from '../../hooks/customHooks'
import { Container, Row, Col } from 'react-bootstrap'
import ConcertCard from "../../components/concertCard/concertCard"
import SearchBar from '../../components/searchBar'
import { useState } from 'react'
import ModelJumbotron from "../../components/modelJumbotron/modelJumbotron"

const URL = "http://127.0.0.1:5000/api/v1/concerts"

const Concerts = () => {

    let [ city, setCity ] = useState('')
    let [ artist, setArtist ] = useState('')

    const { data } = useFetch(URL)

    const changeSearchByCity = (e) => {
        setCity(e.target.value)
    }

    const changeSearchByArtist = (e) => {
        setArtist(e.target.value)
    }

    const filteredConcerts = data
    .filter(concert => {
        return city ? concert.venue.location.toLowerCase().includes(city) : concert
    })
    .filter(concert => {
        return artist ? concert.artist.name.toLowerCase().includes(artist) : concert
    })

    return (
        <>
            <ModelJumbotron image="./assets/jumbotron-concert-photo.jpg" text="All Concerts" />
            <Container>
                <Row>
                    <Col>
                        <SearchBar label="Filter By City" searchTerm={changeSearchByCity} />
                    </Col>
                    <Col>
                        <SearchBar label="Filter By Artist" searchTerm={changeSearchByArtist} />
                    </Col>
                </Row>
                <Row>
                {filteredConcerts.map((event, i) => {
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