
import axios from 'axios';

const deleteTravels = async(Id) => {
    try {
        const response = await axios.delete(`http://localhost:4500/travel/${Id}`)
        return response.data;
    } catch (error) {
        console.error('Error delete:', error);
    throw error;
    }
}

export const deleteComment = async(commentId) => {
    try {
      const response = await axios.delete(`http://localhost:4500/travel/comments/${commentId}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting comment:', error);
      throw error;
    }
  }


export default deleteTravels

