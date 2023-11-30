import { Container } from 'react-bootstrap'

const ModelJumbotron = ({ text, image }) => {

    const jumbotronStyle = {
        backgroundImage: `url(${image})`,
        height: "25vh"
    }

    return (
        <div style={jumbotronStyle} className="jumbotron jumbotron-fluid text-center py-5 mb-4 bg-dark text-white text-shadow d-flex flex-column justify-content-center">
            <div className="container">
                <h1 className="display-1">{text}</h1>
            </div>
        </div>
    )
}

export default ModelJumbotron