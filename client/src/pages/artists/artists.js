import Header from "../../components/header"
import ArtistCard from '../../components/artistCard'
import { useFetch } from '../../hooks/customHooks'
import { Container, Row, Col } from 'react-bootstrap'
import { useState } from 'react'
import SearchBar from "../../components/searchBar/searchBar"


const URL = 'http://127.0.0.1:5000/api/v1/artists'

const Artists = () => {

    const { data } = useFetch(URL)

    let [ searchName, setSearchByName ] = useState('')
    let [ searchGenre, setSearchGenre] = useState('')

    const changeSearchByName = (e) => {
        setSearchByName(e.target.value)
        console.log('this is the name filter', searchName)
    }

    const changeSearchByGenre = (e) => {
        setSearchGenre(e.target.value)
        console.log('This is the genre filter' , searchGenre)
    }

    const filteredArists = data
        .filter(artist => {
            return searchName ? artist.name.toLowerCase().includes(searchName) : artist
        })
        .filter(artist => {
            return searchGenre ? artist.genre.toLowerCase().includes(searchGenre) : artist
        })

    return (
        <>
            <Header text="All Artists"/>
            <Container>
                <Row>
                    <Col md={6}>
                        <SearchBar label="Filter By Name" searchTerm={changeSearchByName}/>
                    </Col>
                    <Col md={6}>
                        <SearchBar label="Filter By Genre" searchTerm={changeSearchByGenre}/>
                    </Col>
                </Row>
                <Row>
                    {filteredArists.map(({id, name, genre}) => {
                        return(
                            <Col key={id} md={4}>
                                <ArtistCard id={id} name={name} genre={genre} />
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </>
    )
}

export default Artists