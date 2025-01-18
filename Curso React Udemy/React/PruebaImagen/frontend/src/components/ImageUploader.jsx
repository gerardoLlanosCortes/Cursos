// ImageUploader.jsx
import React, { useState } from 'react';
import axios from 'axios';

const ImageUploader = ({ fetchImages }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleUpload = async (event) => {
    event.preventDefault();

    if (selectedImage) {
      const formData = new FormData();
      formData.append('file', selectedImage);

      try {
        await axios.post('http://localhost:4001/' + selectedImage.name, formData);
        fetchImages(); // Refresh the list of available images after successful upload
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  };

  return (
    <div>
      <h2>Image Uploader</h2>
      <form onSubmit={handleUpload}>
        <input type="file" onChange={handleImageChange} accept="image/*" required />
        <button type="submit">Upload Image</button>
      </form>
    </div>
  );
};

export default ImageUploader;
