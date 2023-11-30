import { useParams } from "react-router-dom";
import { useFetch } from '../../hooks/customHooks'
import VenueDetailsView from '../../components/venueDetailsView'

const URL = 'http://127.0.0.1:5000/api/v1/venues';

const VenueDetails = () => {

    const { id }  = useParams()
    const { data } = useFetch(`${URL}/${id}`)

    console.log(data)

    return <VenueDetailsView venue={data} />
}

export default VenueDetails