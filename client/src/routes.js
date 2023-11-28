import App from './app'
import Home from './pages/home'
import Artists from './pages/artists'
import Concerts from './pages/concerts'
import Venues from './pages/venues'
import MyTickets from './pages/myTickets/myTickets'
import AddConcert from './pages/addConcert'
import ArtistDetails from './pages/artistDetails/artistDetails'
import VenueDetails from './pages/venueDetails/venueDetails'

const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/myTickets',
                element: <MyTickets />
            },
            {
                path: '/artists',
                element: <Artists />
            },
            {
                path: '/artists/:id',
                element: <ArtistDetails />
            },
            {
                path: '/venues',
                element: <Venues />
            },
            {
                path: '/venues/:id',
                element: <VenueDetails />
            },
            {
                path: '/concerts',
                element: <Concerts />
            },
            {
                path: '/addConcert',
                element: <AddConcert />
            },
        ]
    }
]

export default routes