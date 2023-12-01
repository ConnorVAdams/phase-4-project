import Header from "../../components/header/header"
import ConcertForm from "../../components/concertForm/concertForm"
import ModelJumbotron from '../../components/modelJumbotron'

const AddConcert = () => {
    return (
        <>
            <ModelJumbotron text="Add Concert" image="./assets/jumbotron-concert-photo.jpg"/>

            <ConcertForm/>
        </>
    )
}

export default AddConcert