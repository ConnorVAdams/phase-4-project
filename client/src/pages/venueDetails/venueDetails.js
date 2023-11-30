import { useParams } from "react-router-dom";
import { useFetch } from '../../hooks/customHooks'
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react'
import VenueDetailsView from '../../components/venueDetailsView'

const URL = 'http://127.0.0.1:5000/api/v1/venues';

const VenueDetails = () => {

    const { id }  = useParams()
    const { data } = useFetch(`${URL}/${id}`)

    const navigate = useNavigate()

    useEffect(() => {
        if (data['error']){
            navigate('/error')
        }
    })

    return <VenueDetailsView venue={data} />
}

export default VenueDetails