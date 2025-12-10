import { Outlet } from 'react-router-dom'
import Navbar from '../pages/Shared/Navbar'
import Footer from '../pages/Shared/Footer'
const RootLayout = () => {
  return (
    <div className='bg-primary'>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default RootLayout