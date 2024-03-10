import axios from 'axios';

export const addItems = async(userId, placeData) => {
try {
    const { _id, name, location } = placeData;
    const response = await axios.post(`http://localhost:4500/saved/saved/${userId}`, {
        cityId: _id,
        name,
        location,
        
      });
      return response.data;
} catch (error) {
    console.error('Error adding to cart:', error);
    throw error;
}
}

export const savedItems = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:4500/saved/saved/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Error adding to cart:', error);
      throw error;
    }
  }