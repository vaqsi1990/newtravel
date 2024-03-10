import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../../parts/Navbar';
import './single.css'
import deleteTravels from '../../hooks/Delete'
import { AuthContext } from '../../helper/Login';
import { addItems } from '../../helper/Saved';
import Comment from '../../parts/coments/Comment';
import CommentList from '../../parts/coments/CommentList';





export default function Single() {
const {id} = useParams()
const { user } = useContext(AuthContext);
const [travel, setTravel] = useState(null)
const [comments, setComments] = useState([]);
const userId = user?.details?._id;
console.log(userId);
const navigate = useNavigate()
const imageSrc = `http://localhost:4500/uploads/${travel?.photos[1]}`;
useEffect( () => {
    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:4500/travel/${id}`);
            const data = await response.json();
            setTravel(data)
        } catch (error) {
            console.log(error);
        }
    }
    fetchData()
}, [id])

  const deleteTravel = async() => {
    try {
      
      await deleteTravels(travel._id)
      console.log('game deleted',  'Game:', travel);
      navigate('/');
    } catch (error) {
      
    }
  }

  const handleSave = async () => {
    try {
      if (!userId) {
        console.error('Invalid user data');
        return;
      }
  
      
      if (travel) {
        await addItems(userId, travel);
      }
  
      console.log('done');
    } catch (error) {
      console.error('Error handling save:', error);
    }
  };
  const handleCommentAdded = (newComment) => {
    console.log('New Comment:', newComment);
    setComments((prevComments) => [...prevComments, newComment]);
  };

  return (
    <>
   
      <Navbar />
    <div className="container top">
      <div className="row d-flex justify-content-center align-items-center">

    <div className="col-md-10 mt-5 ">
    <img src={ `http://localhost:4500/uploads/${travel?.photos[0]}`} alt="" />
    </div>
      </div>
    </div>
    <div className='container top'>
      <div className="row">
        <div className="d-flex flex-column  justify-content-center align-items-center">
      <h1>About {travel?.name}</h1>
          <div className="col-md-5 mt-3 mb-4">
      <img className='img-fluid' src={imageSrc} alt="" />

          </div>
      <h2 className='mt-3 mb-4'> {travel?.location} </h2>
        <h2> What To See: </h2>
        <div className="col-md-5 mt-3 mb-4">
      <img className='img-fluid' src={ `http://localhost:4500/uploads/${travel?.photos[2]}`} alt="" />

          </div>
          <div className="container">

          <h2> {travel?.dayOne} </h2>
          </div>
          <div className="col-md-5 mt-3 mb-4">
      <img className='img-fluid' src={ `http://localhost:4500/uploads/${travel?.photos[3]}`} alt="" />

          </div>

          <h2> {travel?.dayTwo} </h2>
        </div>
      </div>
      <div className="d-flex flex-row  justify-content-center align-items-center gap-3 mb-5">

          {  user && user.isAdmin && (
            <>
            
            <button type="button" onClick={handleSave} class="btn btn-dark">Save</button>
            
<button onClick={deleteTravel}  type="button" className="btn btn-dark mx-3"> delete  </button>
            </>
)}
      </div>
      <CommentList id={id} comments={comments}  />
        <Comment id={id} onCommentAdded={handleCommentAdded} />
    </div>
    
    </>
  )
}
