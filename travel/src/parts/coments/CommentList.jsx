import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../helper/Login';
import axios from 'axios';
import { deleteComment } from '../../hooks/Delete';

export default function CommentList({ id }) {
  const { user } = useContext(AuthContext);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const allComments = async () => {
      try {
        const response = await axios.get(`http://localhost:4500/travel/comments/${id}`);
        const data = response.data;
        setComments(data);
      } catch (error) {
        console.log('Cannot load all comments', error);
      }
    };

    allComments();
  }, [id]);

  const deleteComments = async (commentId) => {
    try {
      await deleteComment(commentId);
      // Update the state by filtering out the deleted comment
      setComments((prevComments) => prevComments.filter((comment) => comment._id !== commentId));
      console.log('comments deleted');
    } catch (error) {
      console.log('error:', error);
    }
  };

  return (
    <>
      <h3 className='text-center mb-5'> Comments: </h3>
      <ul className='d-flex justify-content-start flex-column gap-3 align-items-center mb-5'>
      {comments.map((comment) => (
  <ul key={comment._id}>
    <li>
      <strong>{comment.user}:</strong> {comment.text}
      <button onClick={() => deleteComments(comment._id)} className='btn btn-dark mx-3'>
        delete
      </button>
    </li>
 
  </ul>
))}

      </ul>
    </>
  );
}
