import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import 'bootstrap/dist/css/bootstrap.min.css'


const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App;