import React, { useState } from 'react';
import { Container, Row, Col, Pagination, Button } from 'react-bootstrap';
import ConcertCard from "../../components/concertCard/concertCard";
import { useFetch } from '../../hooks/customHooks';
import SearchBar from '../../components/searchBar';
import ModelJumbotron from "../../components/modelJumbotron/modelJumbotron";

const URL = "http://127.0.0.1:5555/api/v1/concerts";

const Concerts = () => {
    
    // Fetching concert data
    const { data } = useFetch(URL);

    // Temporary state for holding search input before applying filters
    let [tempCity, setTempCity] = useState('');
    let [tempArtist, setTempArtist] = useState('');

    // State for storing the applied search filters
    let [city, setCity] = useState('');
    let [artist, setArtist] = useState('');

    // Pagination state: current page and items per page
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(9); // Adjust as needed

    // Handlers for updating temporary search state
    const changeTempSearchByCity = (e) => {
        setTempCity(e.target.value);
    };

    const changeTempSearchByArtist = (e) => {
        setTempArtist(e.target.value);
    };

    // Handler for applying search filters
    const applySearchFilters = () => {
        // Update the actual search state with the temporary state
        setCity(tempCity);
        setArtist(tempArtist);
        // Reset to the first page after applying filters
        setCurrentPage(1);
    };

    // Filtering concerts based on search filters
    const filteredConcerts = data
        .filter(concert => city ? concert.venue.location.toLowerCase().includes(city.toLowerCase()) : true)
        .filter(concert => artist ? concert.artist.name.toLowerCase().includes(artist.toLowerCase()) : true);

    // Pagination logic
    // Calculate the total number of pages
    const totalPages = Math.ceil(filteredConcerts.length / itemsPerPage);
    // Determine the range of items for the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    // Slice the array of items to get only those for the current page
    const currentItems = filteredConcerts.slice(indexOfFirstItem, indexOfLastItem);

    // Handler for changing page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <ModelJumbotron text="All Concerts" />
            <Container>
                <Row>
                    <Col>
                        {/* Temporary search input for artist */}
                        <SearchBar label="Filter By Artist" searchTerm={changeTempSearchByArtist} />
                    </Col>
                    <Col>
                        {/* Temporary search input for city */}
                        <SearchBar label="Filter By City" searchTerm={changeTempSearchByCity} />
                    </Col>
                    <Col className="d-flex flex-column justify-content-end">
                        {/* Button to apply search filters */}
                        <Button variant="secondary" onClick={applySearchFilters}>Search</Button>
                    </Col>
                </Row>
                <Row>
                    {/* Rendering the current page's items */}
                    {currentItems.map((event, i) => (
                        <Col md={4} key={i}>
                            <ConcertCard event={event} />
                        </Col>
                    ))}
                </Row>
                <Pagination size="lg" className="d-flex flex-row justify-content-center my-5">
                    {/* Conditional rendering of pagination controls */}
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