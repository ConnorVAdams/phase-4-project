import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { useState } from 'react'
import { v4 as uuid } from "uuid";
import 'bootstrap/dist/css/bootstrap.min.css'


const App = () => {

  const [ userTickets, setUserTickets ] = useState([])

  const addToUserTickets = (concert) => {

    const ticket = {
      id: uuid(),
      concert
    }

    setUserTickets([...userTickets, ticket])
  }

  const removeFromUserTickets = (id) => {
    const newTickets = userTickets.filter(concert => concert.id !== id)
    setUserTickets(newTickets)
  }

  return (
    <>
      <Navbar />
      <Outlet context={{ userTickets, addToUserTickets, removeFromUserTickets }}/>
      <Footer />
    </>
  )
}

export default App;