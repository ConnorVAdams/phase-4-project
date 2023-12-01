import React, { useState } from 'react';
import { Container, Row, Col, Pagination, Button } from 'react-bootstrap';
import ArtistCard from '../../components/artistCard';
import { useFetch } from '../../hooks/customHooks';
import SearchBar from "../../components/searchBar/searchBar";
import ModelJumbotron from "../../components/modelJumbotron/modelJumbotron";

const URL = 'http://127.0.0.1:5555/api/v1/artists';

const Artists = () => {
    const { data } = useFetch(URL);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8); // Adjust as needed

    const [tempSearchName, setTempSearchByName] = useState('');
    const [tempSearchGenre, setTempSearchGenre] = useState('');
    const [searchName, setSearchName] = useState('');
    const [searchGenre, setSearchGenre] = useState('');

    const applyFilters = () => {
        setSearchName(tempSearchName);
        setSearchGenre(tempSearchGenre);
        setCurrentPage(1); // Reset to first page after applying filters
    };

    const filteredArtists = data
        .filter(artist => {
            return searchName ? artist.name.toLowerCase().includes(searchName.toLowerCase()) : true;
        })
        .filter(artist => {
            return searchGenre ? artist.genre.toLowerCase().includes(searchGenre.toLowerCase()) : true;
        });

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredArtists.slice(indexOfFirstItem, indexOfLastItem);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <ModelJumbotron text="All Artists"/>
            <Container>
                <Row>
                    <Col md={4}>
                        <SearchBar label="Filter By Name" searchTerm={(e) => setTempSearchByName(e.target.value)}/>
                    </Col>
                    <Col md={4}>
                        <SearchBar label="Filter By Genre" searchTerm={(e) => setTempSearchGenre(e.target.value)}/>
                    </Col>
                    <Col md={4} className="d-flex flex-column justify-content-end">
                        <Button onClick={applyFilters}>Apply Filters</Button>
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
