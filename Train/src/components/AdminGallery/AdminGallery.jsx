import React, { useState } from "react";
import "./AdminGallery.css";

const AdminGallery = () => {
  const [images, setImages] = useState([
    { id: 1, src: "train1.jpg", title: "Train 1" },
    { id: 2, src: "train2.jpg", title: "Train 2" },
    { id: 3, src: "train3.jpg", title: "Train 3" },
    { id: 4, src: "train4.jpg", title: "Train 4" },
  ]);

  const [newImage, setNewImage] = useState("");

  const handleAddImage = () => {
    if (newImage.trim()) {
      const newImageObject = {
        id: Date.now(),
        src: newImage,
        title: `New Image ${images.length + 1}`,
      };
      setImages([...images, newImageObject]);
      setNewImage("");
    } else {
      alert("Please enter a valid image URL.");
    }
  };

  const handleRemoveImage = (id) => {
    const updatedImages = images.filter((image) => image.id !== id);
    setImages(updatedImages);
  };

  return (
    <div className="admin-gallery-container">
      <h2>Admin Gallery</h2>

      <div className="add-image-container">
        <input
          type="text"
          placeholder="Enter Image URL"
          value={newImage}
          onChange={(e) => setNewImage(e.target.value)}
        />
        <button onClick={handleAddImage}>Add Image</button>
      </div>

      <div className="gallery">
        {images.map((image) => (
          <div key={image.id} className="gallery-item">
            <img src={image.src} alt={image.title} />
            <h4>{image.title}</h4>
            <button
              className="remove-button"
              onClick={() => handleRemoveImage(image.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminGallery;
