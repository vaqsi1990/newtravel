import React from 'react'
import Navbar from '../parts/Navbar'

import './home.css'
import Middle from '../parts/Middle'
import Location from '../parts/location/Location'
import Footer from '../parts/Footer'

 function Home() {
  return (
    <div >
      <Navbar />
      <div className='mt-4'>
        <Location />
      <Middle />

      </div>
    <Footer />
    </div>
    
  )
}


export default Home