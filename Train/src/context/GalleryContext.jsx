import React, { createContext, useState, useContext } from "react";

const GalleryContext = createContext();

export const useGallery = () => useContext(GalleryContext);

const GalleryProvider = ({ children }) => {
  const [gallery, setGallery] = useState(
    JSON.parse(localStorage.getItem("gallery")) || []
  );

  const addPhoto = (photo) => {
    const updatedGallery = [...gallery, photo];
    setGallery(updatedGallery);
    localStorage.setItem("gallery", JSON.stringify(updatedGallery));
  };

  const removePhoto = (index) => {
    const updatedGallery = gallery.filter((_, i) => i !== index);
    setGallery(updatedGallery);
    localStorage.setItem("gallery", JSON.stringify(updatedGallery));
  };

  return (
    <GalleryContext.Provider value={{ gallery, addPhoto, removePhoto }}>
      {children}
    </GalleryContext.Provider>
  );
};

export default GalleryProvider;
