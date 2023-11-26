import App from './app'
import Home from './pages/home'
import Artists from './pages/artists'
import Concerts from './pages/concerts'
import Venues from './pages/venues'

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
                path: '/artists',
                element: <Artists />
            },
            {
                path: '/concerts',
                element: <Concerts />
            },
            {
                path: '/venues',
                element: <Venues />
            }
        ]
    }
]

export default routes