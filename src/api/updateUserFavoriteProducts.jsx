import axios from 'axios';

// Replace 'YOUR_API_ENDPOINT' with the actual endpoint where you update the user data
const API_ENDPOINT = 'http://localhost:3000';

export const updateUserFavoriteProducts = async (
  userId,
  newFavoriteProducts
) => {
  try {
    const response = await axios.put(`${API_ENDPOINT}/users/${userId}`, {
      favoriteProducts: newFavoriteProducts,
    });
    return response.data;
  } catch (error) {
    // Handle error
    throw new Error('Failed to update favorite products.');
  }
};
