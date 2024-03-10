import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../helper/Login';
import './navbar.css'

export default function Navbar() {
  const { user, logout} = useContext(AuthContext)

  const HandleLogout =() => {
    logout();
  }


  return (
    <>
    
    
    <div className="container text-white"> 
<nav className="fixed-top navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">

        <Link to='/'  className="navbar-brand text-white">Navbar</Link>
        <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className=" mx-2 gap-4 collapse navbar-collapse text-white justify-content-end" id="navbarNav">
        <ul className="navbar-nav ms-auto text-white d-flex align-items-center">
  <li className="nav-item text-white">
    <Link to="/" className="mx-2 nav-link active text-white" aria-current="page">Home</Link>
  </li>
  {user && user.isAdmin && (
              <li className="nav-item text-white">
                <Link to="/add" className="mx-3 nav-link active text-white" aria-current="page">Add</Link>
              </li>
            )}
 
          
          {user ? (
 <li className="nav-item dropdown text-white">
 <Link className="nav-item d-flex text-center justify-content-center mt-2 text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
 Welcome: <p >{user.details.username}</p>
 </Link>
 <ul className="dropdown-menu bg-dark " aria-labelledby="navbarDropdown">
   <li><Link className="bor dropdown-item p-2 text-white " to='/save'  >Saved</Link></li>
   <li><Link onClick={HandleLogout} className="bb dropdown-item p-2 text-white" href="#">Log Out</Link></li>
 
  
 </ul>
</li>

  
) : (
    <div className="d-flex">
     
      <li className="nav-item">
        <Link to="/login" className="nav-link text-white">Login</Link>
      </li>
      <li className="nav-item">
        <Link to="/register" className="nav-link text-white">Register</Link>
      </li>
    </div>
   )}
</ul>
</div>
      </div>
    </nav>
    </div>
    </>
  )
}


