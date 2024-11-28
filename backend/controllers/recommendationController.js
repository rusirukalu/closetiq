const WardrobeItem = require('../models/WardrobeItem');
const User = require('../models/User');
const axios = require('axios'); // For making API calls (e.g., Weather API)

exports.getOutfitRecommendations = async (req, res) => {
  const { image, userId, eventType } = req.body;  // Data from the frontend

  try {
    // Fetch user preferences and wardrobe from MongoDB
    const user = await User.findById(userId).populate('wardrobe');
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Fetch weather data from Weather API
    const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${user.location}&appid=YOUR_API_KEY`);
    const weather = weatherResponse.data;

    // Generate outfit recommendations based on the user's wardrobe and event type
    const recommendedOutfit = generateOutfit(user.wardrobe, eventType, weather);

    // Send the recommendations back to the frontend
    res.status(200).json(recommendedOutfit);
  } catch (err) {
    res.status(500).json({ error: 'Error generating recommendations', err });
  }
};

// Example function to generate outfit recommendations
function generateOutfit(wardrobe, eventType, weather) {
  // Logic to recommend outfits based on event type (e.g., casual, formal) and weather (e.g., hot, cold)
  const suitableItems = wardrobe.filter(item => item.category === eventType);
  const outfitSuggestions = suitableItems.filter(item => {
    if (weather.main.temp < 20 && item.category === 'jacket') {
      return true;
    }
    if (weather.main.temp > 20 && item.category === 'shirt') {
      return true;
    }
    return false;
  });
  return outfitSuggestions;
}
