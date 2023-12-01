import React, { useState } from 'react';
import { Card, ListGroup, Button, Pagination } from 'react-bootstrap';
import formatDateString from '../../util/formatDate';
import { useOutletContext } from 'react-router-dom';
import LowTicketWarning from '../lowTicketWarning/lowTicketWarning';
import BuyTicketModal from '../buyTicketModal/buyTicketModal';
import sortByDate from '../../util/sortByDate';
import triggerConfetti from '../../util/confettiEffect';

const ArtistConcertsCard = ({ concerts }) => {
    concerts = concerts.sort(sortByDate);

    const { addToUserTickets } = useOutletContext();
    const [showModal, setShowModal] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3; // Adjust as needed

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const addConcert = (e) => {
        const [concert] = concerts.filter(concert => concert.id === Number(e.target.dataset.concert_id));
        addToUserTickets(concert);
        handleShowModal();
        triggerConfetti();
    };

    // Pagination logic
    const totalPages = Math.ceil(concerts.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = concerts.slice(indexOfFirstItem, indexOfLastItem);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <Card className="text-center">
                <Card.Header>Tour Schedule</Card.Header>
                <ListGroup variant="flush">
                    {currentItems.map((concert, i) => (
                        <ListGroup.Item key={i} className="lead">
                            <b>{formatDateString(concert.date)}</b>
                            <p>
                                {concert.venue.location} | {concert.venue.name}
                            </p>
                            {concert.tix_low ? <LowTicketWarning /> : ''}
                            <div className="d-grid gap-2">
                                {concert.sold_out ? 
                                    <Button variant="dark" disabled>Sold Out</Button>
                                    :
                                    <Button onClick={addConcert} data-concert_id={concert.id} variant="primary">Buy Tickets</Button>
                                }
                            </div>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Card>
            <Pagination size="lg" className="d-flex justify-content-center my-4">
                {[...Array(totalPages).keys()].map(number => (
                    <Pagination.Item key={number + 1} active={number + 1 === currentPage} onClick={() => paginate(number + 1)}>
                        {number + 1}
                    </Pagination.Item>
                ))}
            </Pagination>
            <BuyTicketModal show={showModal} handleClose={handleCloseModal} />
        </>
    );
};

export default ArtistConcertsCard;
