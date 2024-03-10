import React from 'react'
import useFetch from '../../hooks/useFetch'
import Navbar from '../../parts/Navbar'
import { Link } from 'react-router-dom';
import './europe.css'
export default function Europe() {
    const {data} = useFetch('http://localhost:4500/travel')
    const filteredData = data.filter((travel) => travel.continent === "europe");
    console.log(filteredData);
  return (
   <>
   <Navbar />
   <div className="container top text-center ">
    <div className="row d-flex flex-row    align-items-center  mb-5  rounded ">
   
    {filteredData.map(item => (
      <>
   <div class="col-12 col-sm-8 col-md-6 col-lg-4 ">
      <div class="card">
      <img style={{"height":'250px'}} src={ `http://localhost:4500/uploads/${item?.photos[0]}`} alt="" />
        <div class="es card-img-overlay mt-5 text-white d-flex flex-column justify-content-center">
          <h4 class="card-title">{item?.name}</h4>
        
          
          <div class=" d-flex justify-content-center">
          <Link  className='text-black ds' to={`/single/${item._id}`} >Info</Link>
           
          </div>
        </div>
      </div>
    </div>
      
     {/* <div className="col-lg-2 about-right text-lg-right mt-lg-0 mt-5 ">
     <img src={ `http://localhost:4500/uploads/${item?.photos[0]}`} alt="" />
     </div>
      <div className="col-lg-6 mt-5 mb-5 about-left shadow">
        <h2> {item?.name} </h2>
        <h2> {item?.location} </h2>
      </div>
      <div className="col-md-12 mt-3 col-lg-4 bg-dark text-white d-flex align-items-center justify-content-center " style={{ height: '150px' }}>
  <Link className="llll" to={`/single/${item._id}`} >Info</Link>
</div> */}
      
      </>

 
    ))}
    </div>
   </div>
   </>
  )
}
