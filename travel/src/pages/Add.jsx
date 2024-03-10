import React, { useContext, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../parts/Navbar'
import { AuthContext } from '../helper/Login';
import "./add.css";
export default function Add() {
  const { user} = useContext(AuthContext)
  
  const [travel, setTravel] = useState({
    name: '',
    dayOne:'',
    dayTwo:'',
    continent:'',
    photos: [],
    location: '',
    cuisine:''
    })
    const navigate = useNavigate();

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setTravel((prevGame) => ({
        ...prevGame,
        [name]: value,
      }));
    };



    const addNewItemHandler = () => {
      const formData = new FormData();
      formData.append('name', travel.name);
      formData.append('dayOne', travel.dayOne);
      formData.append('dayTwo', travel.dayTwo);
      formData.append('location', travel.location);
      formData.append('cuisine', travel.cuisine);
      formData.append('continent', travel.continent)
      
      for (let i = 0; i < travel.photos.length; i++) {
        formData.append('photos', travel.photos[i]);
      }
  
     
      axios.post('http://localhost:4500/add-products', formData)
        .then((response) => {
          console.log('Game added successfully:', response.data);
          navigate("/");
        })
        .catch((error) => {
          console.error('Error adding game:', error);
        });
    };
    

const handleFileChange = (e) => {
  const files = e.target.files;
  setTravel((prevGame) => ({
    ...prevGame,
    photos: files,
  }));
  console.log('Game with photos:', travel);
};
  return (
   <>
  <Navbar />
         <main className="container mt  mb-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <form className="product-form"  onSubmit={(e) => {
    e.preventDefault();
    addNewItemHandler();
  }}  encType="multipart/form-data" >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder='name'
                required
                onChange={handleInputChange}
             / >
            </div>
            <div className="form-group">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                className="form-control"
                name="location"
                id="location"
                placeholder='location'
                required
                onChange={handleInputChange}
             / >
            </div>
            <div className="form-group">
              <label htmlFor="continent">Continent</label>
              <input
                type="text"
                className="form-control"
                name="continent"
                id="continent"
                placeholder='continent'
                required
                onChange={handleInputChange}
             / >
            </div>
              <div className="mb-3">
                <label htmlFor="cuisine" className="form-label">
                Cuisine
                </label>
                <input
                  name="cuisine"
                  className="form-control"
                  id="cuisine"
                  type="text"
                  placeholder="cuisine"
                  onChange={handleInputChange}
                />
              </div>
            
              <div className="mb-3">
                <label htmlFor="photos" className="form-label">
                  Image
                </label>
                <input
                  name="photos"
                  type="file"
                  id="image"
                  className="form-control"
                  placeholder="Image"
                  multiple
                  onChange={handleFileChange}
                />
              </div>
          
            <div className="mb-3">
                <label htmlFor="dayOne" className="form-label">
                dayOne
                </label>
                <textarea
                  name="dayOne"
                  id="dayOne"
                  rows="8"
                  className="form-control"
                  placeholder="dayOne"
                  required
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="dayTwo" className="form-label">
                dayOne
                </label>
                <textarea
                  name="dayTwo"
                  id="dayTwo"
                  rows="8"
                  className="form-control"
                  placeholder="dayTwo"
                  required
                  onChange={handleInputChange}
                />
              </div>
            <div className="mb-3 text-center">
            <button type="submit" className="btn btn-primary">
      <h4>Add new items</h4>
    </button>
              </div>
          </form>
        </div>
      </div>
    </main>
   
   </>
  )
}
