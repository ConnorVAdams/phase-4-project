import React, { useState } from 'react';
import { Container, Row, Col, Pagination, Button } from 'react-bootstrap';
import ConcertCard from "../../components/concertCard/concertCard";
import { useFetch } from '../../hooks/customHooks';
import SearchBar from '../../components/searchBar';
import ModelJumbotron from "../../components/modelJumbotron/modelJumbotron";

const URL = "http://127.0.0.1:5555/api/v1/concerts";

const Concerts = () => {
    let [tempCity, setTempCity] = useState('');
    let [tempArtist, setTempArtist] = useState('');
    let [city, setCity] = useState('');
    let [artist, setArtist] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(9); // Adjust as needed

    const { data } = useFetch(URL);

    const changeTempSearchByCity = (e) => {
        setTempCity(e.target.value);
    };

    const changeTempSearchByArtist = (e) => {
        setTempArtist(e.target.value);
    };

    const applySearchFilters = () => {
        setCity(tempCity);
        setArtist(tempArtist);
        setCurrentPage(1); // Reset to the first page after applying filters
    };

    const filteredConcerts = data
        .filter(concert => city ? concert.venue.location.toLowerCase().includes(city) : concert)
        .filter(concert => artist ? concert.artist.name.toLowerCase().includes(artist) : concert);

    // Pagination logic
    const totalPages = Math.ceil(filteredConcerts.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredConcerts.slice(indexOfFirstItem, indexOfLastItem);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <ModelJumbotron text="All Concerts" />
            <Container>
                <Row>
                    <Col>
                        <SearchBar label="Filter By Artist" searchTerm={changeTempSearchByArtist} />
                    </Col>
                    <Col>
                        <SearchBar label="Filter By City" searchTerm={changeTempSearchByCity} />
                    </Col>
                    <Col className="d-flex flex-column justify-content-end">
                        <Button variant="secondary" onClick={applySearchFilters}>Search</Button>
                    </Col>
                </Row>
                <Row>
                    {currentItems.map((event, i) => (
                        <Col md={4} key={i}>
                            <ConcertCard event={event} />
                        </Col>
                    ))}
                </Row>
                <Pagination size="lg" className="d-flex flex-row justify-content-center my-5">
                    {totalPages > 4 && (
                        <>
                            <Pagination.First onClick={() => paginate(1)} disabled={currentPage === 1} />
                            <Pagination.Prev onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} />
                        </>
                    )}
                    {[...Array(totalPages).keys()].map(number => (
                        <Pagination.Item key={number + 1} active={number + 1 === currentPage} onClick={() => paginate(number + 1)}>
                            {number + 1}
                        </Pagination.Item>
                    ))}
                    {totalPages > 4 && (
                        <>
                            <Pagination.Next onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages} />
                            <Pagination.Last onClick={() => paginate(totalPages)} disabled={currentPage === totalPages} />
                        </>
                    )}
                </Pagination>
            </Container>
        </>
    );
};

export default Concerts;





