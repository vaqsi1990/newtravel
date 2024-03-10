import React from 'react'
import useFetch from '../../hooks/useFetch'
import Navbar from '../../parts/Navbar'
import './asia.css'
import { Link } from 'react-router-dom';
export default function Asia() {
  const {data} = useFetch('http://localhost:4500/travel')
  const filteredData = data.filter((travel) => travel.continent === "asia");
  console.log(filteredData);
  return (
    <>
    <Navbar />
    <div className="container top text-center ">
     <div className="row d-flex flex-row    align-items-center   mb-5  rounded ">
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
       
       </>
 
  
     ))}
     </div>
    </div>
    </>
   )
}
