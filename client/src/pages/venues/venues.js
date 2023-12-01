import React, { useState } from 'react';
import { Container, Row, Col, Pagination } from 'react-bootstrap';
import VenueCard from "../../components/venueCard/VenueCard";
import { useFetch } from '../../hooks/customHooks';
import SearchBar from "../../components/searchBar/searchBar";
import ModelJumbotron from "../../components/modelJumbotron/modelJumbotron";

const URL = 'http://127.0.0.1:5555/api/v1/venues';

const Venues = () => {
    const { data } = useFetch(URL);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8); // Adjust as needed

    let [searchTerm, setSearchTerm] = useState('');

    const changeSearchTerm = (e) => {
        setCurrentPage(1)
        setSearchTerm(e.target.value);
    };

    const filteredVenues = data
        .filter(venue => {
            return searchTerm ? venue.name.toLowerCase().includes(searchTerm) : venue;
        });

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredVenues.slice(indexOfFirstItem, indexOfLastItem);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <ModelJumbotron text="All Venues" />
            <Container>
                <Row>
                    <Col>
                        <SearchBar label="Search Venues By Name" searchTerm={changeSearchTerm} />
                    </Col>
                </Row>
                <Row>
                    {currentItems.map(({ id, name, location }) => (
                        <Col md={3} key={id}>
                            <VenueCard id={id} name={name} location={location} />
                        </Col>
                    ))}
                </Row>
                <Pagination size="lg" className="d-flex flex-row justify-content-center my-5">
                    {[...Array(Math.ceil(filteredVenues.length / itemsPerPage)).keys()].map(number => (
                        <Pagination.Item key={number + 1} active={number + 1 === currentPage} onClick={() => paginate(number + 1)}>
                            {number + 1}
                        </Pagination.Item>
                    ))}
                </Pagination>
            </Container>
        </>
    );
};

export default Venues;
