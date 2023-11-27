import Header from "../../components/header"
import ArtistCard from '../../components/artistCard'
import { useFetch } from '../../hooks/customHooks'
import { Container } from 'react-bootstrap'

const URL = 'http://127.0.0.1:5000/api/v1/artists'

const Artists = () => {

    const { data } = useFetch(URL)

    console.log(data)

    return (
        <>
            <Header text="All Artists"/>
            <Container>
                {data.map(({name, genre}) => <ArtistCard name={name} genre={genre} />)}
            </Container>
        </>
    )
}

export default Artists