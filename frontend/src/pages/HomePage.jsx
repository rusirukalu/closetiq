import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link to navigate
import ImageUpload from '../components/ImageUpload';
import OutfitRecommendations from '../components/OutfitRecommendations';

const HomePage = () => {
  const [imageUploaded, setImageUploaded] = useState(false);
  const [userId, setUserId] = useState('user123'); // Replace with dynamic userId
  const [eventType, setEventType] = useState('casual'); // Replace with user-selected event type

  const handleImageUploaded = () => {
    setImageUploaded(true); // Set this to true when an image is uploaded successfully
  };

  return (
    <div className="home-page">
      <h1>AI Personal Stylist</h1>
      {!imageUploaded ? (
        <ImageUpload onImageUploaded={handleImageUploaded} />
      ) : (
        <OutfitRecommendations userId={userId} eventType={eventType} />
      )}
      
      {/* Add a link to navigate to the LoginPage */}
      <div>
        <Link to="/login">
          <button>Go to Login</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
