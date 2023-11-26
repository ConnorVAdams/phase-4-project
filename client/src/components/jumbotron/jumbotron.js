import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import './jumbotron.css'

const Jumbotron = () => {
    return (
        <div className="jumbotron jumbotron-fluid text-center py-5 bg-light text-dark d-flex flex-column justify-content-center">
            <div className="container">
                <h1 className="display-4">StageFinder</h1>
                <p className="lead my-4">Find the best stages for your performances.</p>
                <Link to="/concerts">
                    <Button className="mt-4" variant="warning" size="lg">Explore Concerts</Button>
                </Link>
            </div>
        </div>
    )
}

export default Jumbotron