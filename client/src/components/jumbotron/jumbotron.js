import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import './jumbotron.css'

const Jumbotron = () => {
    return (
        <div className="jumbotron jumbotron-fluid text-center py-5 bg-light text-white text-shadow d-flex flex-column justify-content-center">
            <div className="container">
                <h1 className="display-1">StageFinder</h1>
                <p className="display-6 my-4">Find the best events happening in your area.</p>
                <Link to="/concerts">
                    <Button className="mt-4" variant="primary" size="lg">Find Concerts</Button>
                </Link>
            </div>
        </div>
    )
}

export default Jumbotron