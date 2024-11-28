import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleUpload = async () => {
    if (!image) {
      setMessage('Please select an image to upload.');
      return;
    }
    setUploading(true);
    setMessage('');

    const formData = new FormData();
    formData.append('image', image);

    try {
      const response = await axios.post('http://localhost:5000/api/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setUploading(false);
      setMessage('Image uploaded successfully!');
      console.log(response.data);
    } catch (error) {
      setUploading(false);
      setMessage('Error uploading image. Please try again.');
      console.error(error);
    }
  };

  return (
    <div className="upload-container">
      <h2>Upload Your Clothing Image</h2>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload'}
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ImageUpload;
