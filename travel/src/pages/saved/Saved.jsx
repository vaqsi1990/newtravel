import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../helper/Login';
import { savedItems } from '../../helper/Saved';
import { Link } from 'react-router-dom';
import Navbar from '../../parts/Navbar'
import './saved.css'
export default function Saved() {
    const [save, setSave] = useState(null)
    const { user } = useContext(AuthContext);
  const userId = user?.details?._id;

  const fetchData = async () => {
    try {
      const data = await savedItems(userId);
      setSave(data);

      
     
     
    } catch (error) {
      console.error('Error fetching cart data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [userId]);

  return (
    <>
    <Navbar />
    <div className="container top">
    <div className="row">
        {save ? (
            save.items.map((item) => (
              <>
              <div className="col-xs-12 col-sm-4">
                        <div className="card text-center">
                          
                            <div className="card-content text-center">
                                <h4 className="card-title">
                                   
              <h1 key={item._id}>{item.name}</h1>
                                 
                                </h4>
                                <p className="p-2">
                                {item.location}
                                </p>
                            </div>
                            <div className="card-read-more">
                            <Link to={`/single/${item.travels}`} className='btn btn-link btn-block'> View </Link>
                                
                            </div>
                        </div>
                    </div>
              </>
                
            ))
        ) : (
            <p>Empty...</p>
        )}
    </div>
</div>

    
    </>
  )
}
