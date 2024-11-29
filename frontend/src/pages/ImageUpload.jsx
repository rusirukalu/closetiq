import React, { useState } from 'react';

const ImageUpload = ({ onImageUpload }) => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      onImageUpload(file); // Notify parent component that an image has been selected
    }
  };

  return (
    <div className="image-upload-container">
      <input 
        type="file" 
        accept="image/*" 
        onChange={handleImageChange} 
        className="file-input"
      />
      {image && <img src={URL.createObjectURL(image)} alt="Selected" className="preview-image" />}
    </div>
  );
};

export default ImageUpload;
