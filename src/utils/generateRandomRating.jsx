function generateRandomRating() {
    // Generate a random number between 0 and 1
    const random = Math.random();
    
    // Map the random number to a rating between 3 and 5
    const rating = random * 2 + 3;
    
    // Round the rating to one decimal place
    return Number(rating.toFixed(1));
  }

  export default generateRandomRating;