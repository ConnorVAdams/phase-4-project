import React, { useState } from 'react';
import { Container, Row, Col, Pagination } from 'react-bootstrap';
import ArtistCard from '../../components/artistCard';
import { useFetch } from '../../hooks/customHooks';
import SearchBar from "../../components/searchBar/searchBar";
import ModelJumbotron from "../../components/modelJumbotron/modelJumbotron";

const URL = 'http://127.0.0.1:5555/api/v1/artists';

const Artists = () => {
    const { data } = useFetch(URL);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8); // Adjust as needed

    let [searchName, setSearchByName] = useState('');
    let [searchGenre, setSearchGenre] = useState('');

    const changeSearchByName = (e) => {
        setCurrentPage(1)
        setSearchByName(e.target.value);
    };

    const changeSearchByGenre = (e) => {
        setCurrentPage(1)
        setSearchGenre(e.target.value);
    };

    const filteredArtists = data
        .filter(artist => {
            return searchName ? artist.name.toLowerCase().includes(searchName) : artist;
        })
        .filter(artist => {
            return searchGenre ? artist.genre.toLowerCase().includes(searchGenre) : artist;
        });

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredArtists.slice(indexOfFirstItem, indexOfLastItem);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <ModelJumbotron text="All Artists" image="./assets/jumbotron-concert-photo.jpg"/>
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
                    {currentItems.map(({id, name, genre}) => (
                        <Col key={id} md={3}>
                            <ArtistCard id={id} name={name} genre={genre} />
                        </Col>
                    ))}
                </Row>
                <Pagination size='lg' className="d-flex flex-row justify-content-center my-5">
                    {[...Array(Math.ceil(filteredArtists.length / itemsPerPage)).keys()].map(number => (
                        <Pagination.Item key={number + 1} active={number + 1 === currentPage} onClick={() => paginate(number + 1)}>
                            {number + 1}
                        </Pagination.Item>
                    ))}
                </Pagination>
            </Container>
        </>
    );
};

export default Artists;
