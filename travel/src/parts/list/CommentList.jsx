import React, { useState } from 'react'
import Comment from '../coments/Comment';
export default function CommentList() {
    const [comments, setComments] = useState([]);

    const handleAddComment = (newComment) => {
      setComments([...comments, newComment]);
    };
  return (
    <div>
   
    <ul>
      {comments.map((comment) => (
        <li key={comment._id}>{comment.text}</li>
      ))}
    </ul>

    
    <Comment onAddComment={handleAddComment} />
  </div>
  )
}
