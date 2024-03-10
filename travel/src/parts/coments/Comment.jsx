import React, { useState } from 'react'
import axios from 'axios'
export default function Comment({ id, onCommentAdded }) {
    const [text, setText] = useState('')
    const [user, setUser]= useState('')
   
 
    const handleSubmit = async () => {
      try {
        const response = await axios.post(`http://localhost:4500/travel/comments/${id}`, {
          user: user,
          text: text,
        });
    
        console.log('Server Response:', response.data);
    
        onCommentAdded(response.data);
        setUser('');
        setText('');
      } catch (error) {
        console.error('Error adding comment:', error);
      }
    };
    
    

  return (
    <div className='d-flex justify-content-center flex-column gap-3 align-items-center'>
         <input
        type="text"
        placeholder="your name"
        style={{ "width":"200px" }}
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <textarea style={{ "width":"200px" }} value={text} onChange={(e) => setText(e.target.value)} />
      <button className="btn btn-dark mb-3" onClick={handleSubmit}>add comments</button>
    </div>
  )
}
