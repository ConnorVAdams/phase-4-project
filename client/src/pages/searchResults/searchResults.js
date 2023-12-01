import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Pagination, Spinner } from 'react-bootstrap';
import ConcertCard from "../../components/concertCard/concertCard";
import { useSearchParams } from 'react-router-dom';
import { useFetch } from '../../hooks/customHooks';
import ModelJumbotron from "../../components/modelJumbotron/modelJumbotron";

import './searchResults.css'

const URL = "http://127.0.0.1:5555/api/v1/concerts";

const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(9); // Adjust as needed
    const [isLoading, setIsLoading] = useState(true); // Loading state

    const { data } = useFetch(URL);

    useEffect(() => {
        // Set loading to true when query changes
        setIsLoading(true);
        // Set a timeout to simulate loading time
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, [query]);

    // Apply query filter
    const filteredData = data.filter(concert => {
        return concert.artist.name.toLowerCase().includes(query.toLowerCase()) ||
               concert.venue.name.toLowerCase().includes(query.toLowerCase()) ||
               concert.venue.location.toLowerCase().includes(query.toLowerCase());
    });

    // Pagination logic
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <ModelJumbotron text="Search Results" />
            <Container>
                {isLoading ? (
                    <div className="d-flex justify-content-center my-5" style={{height: "40vh"}}>
                        <Spinner animation="border" />
                    </div>
                ) : (
                    <>
                        <Row>
                            {currentItems.map((event, i) => (
                                <Col md={4} key={i} className="slide-down">
                                    <ConcertCard event={event} />
                                </Col>
                            ))}
                        </Row>
                        <Pagination size="lg" className="d-flex flex-row justify-content-center my-5">
                            {[...Array(totalPages).keys()].map(number => (
                                <Pagination.Item key={number + 1} active={number + 1 === currentPage} onClick={() => paginate(number + 1)}>
                                    {number + 1}
                                </Pagination.Item>
                            ))}
                        </Pagination>
                    </>
                )}
            </Container>
        </>
    );
};

export default SearchResults;
