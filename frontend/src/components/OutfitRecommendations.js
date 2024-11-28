import React, { useState } from 'react';
import axios from 'axios';

const OutfitRecommendations = ({ userId, eventType }) => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const getRecommendations = async () => {
    setLoading(true);
    setMessage('');

    try {
      const response = await axios.post('http://localhost:5000/api/recommendations/outfit-recommendations', {
        userId,
        eventType,
        image: 'image-data', // Add the image data from the state or from the previous component
      });

      setRecommendations(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setMessage('Error fetching recommendations. Please try again.');
      console.error(error);
    }
  };

  return (
    <div className="recommendations-container">
      <h2>Outfit Recommendations</h2>
      <button onClick={getRecommendations} disabled={loading}>
        {loading ? 'Loading...' : 'Get Recommendations'}
      </button>

      {message && <p>{message}</p>}
      <div className="recommendations-list">
        {recommendations.length > 0 ? (
          recommendations.map((item, index) => (
            <div key={index} className="recommendation-item">
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <p>{item.category}</p>
            </div>
          ))
        ) : (
          <p>No recommendations found.</p>
        )}
      </div>
    </div>
  );
};

export default OutfitRecommendations;
