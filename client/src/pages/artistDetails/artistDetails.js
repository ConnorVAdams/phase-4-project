import { useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useFetch } from '../../hooks/customHooks'
import ArtistDetailsView from '../../components/artistDetailsView'

const URL = 'http://127.0.0.1:5000/api/v1/artists';

const ArtistDetails = () => {

    const { id }  = useParams()
    const { data } = useFetch(`${URL}/${id}`)

    return <ArtistDetailsView artist={data} />
}

export default ArtistDetails