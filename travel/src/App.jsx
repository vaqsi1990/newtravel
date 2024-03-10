import React, { useContext } from 'react'
import { BrowserRouter,   Navigate,   Route, Routes } from "react-router-dom";
import Home from "./ui/Home"

import Root from './Root';
import GlobalStyles from './styles/GlobalStyles';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { AuthContext } from './helper/Login';


import Add from './pages/Add';
import Single from './pages/singleTravel/Single';
import Europe from './pages/europe/Europe';
import Asia from './pages/asia/Asia'
import Saved from './pages/saved/Saved'
import { DarkModeProvider } from './helper/DarkMode';
export default function App() {


  

  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="/login" />;
    }

    return children;
  };
  return (
    <div >
<DarkModeProvider>



  <GlobalStyles />
  <BrowserRouter>
       <Routes>
       <Route path='/' element={ <Root/> }>

       
        <Route path='/add' element={
           <ProtectedRoute>

             <Add />
           </ProtectedRoute>
        }
        />

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/save" element={<Saved />} />
        <Route path="/register" element={<Register />} />
        <Route path='/single/:id'  element={< Single />} />
        <Route path="/europe" element={<Europe />} />
        <Route path="/asia" element={<Asia />} />
       </Route>
      </Routes>
    </BrowserRouter>
    </DarkModeProvider>
    </div>
  )
}
