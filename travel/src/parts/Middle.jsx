import React from 'react'
import { Link } from 'react-router-dom'
import "./middle.css";
import useFetch from '../hooks/useFetch'
export default function Middle() {
  const {data} = useFetch('http://localhost:4500/travel')
  console.log(data);
  const filteredData = data.filter((travel) => travel.favourite === true);
  
 
  return (
    <>
<div className=" mb-5 vv top text-center  trending-post-area-two " >
  <div className=" back" style={{"backgroundColor":""}}>

  <div className="row ">
    
<div className="col-lg-12 d-flex justify-content-center  align-items-center">
        <div className="d-flex justify-content-center  align-items-center">
        <div className=" text-center mb-30 ">
          <strong><h2 className="title">Trending Places</h2>    </strong>
            
        </div>
      

      
        </div>
        </div>

  </div>
  <div className="row justify-content-center">

    {filteredData.map(item => (
      <div className='vv mb-4 mx-2 col-12 col-sm-10 col-md-8 col-lg-3'>
        <div className="card image" >
          <img
            
            src={`http://localhost:4500/uploads/${item.photos[0]}`}
            className="img-fluid image__img" alt='cutt'
          />
          <div className="card-body image__overlay image__overlay--primary">
            <div className="card-title text-white image__title">{item.name}</div>
            <div className="card-text image__description">
              <Link to={`/single/${item._id}`} className="btn btn-outline-dark text-white btn-sm">Read More</Link>
            </div>
        </div>
          </div>
      </div>
    ))}
  </div>

  </div>
  <div className="trending-shape-wrap">
    <img src="/images/2.png" alt="aa" />
    <img src="/images/1.png" alt="ss" />
  </div>
</div>


    </>
  )
}
