// PortfolioIdGallery.js

import React, { useState } from "react";

const PortfolioIdGallery = ({ images, onImageClick }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    if (onImageClick) {
      onImageClick(image);
    }
  };

  return (
    <div className="grid gap-4">
      <div>
        <img
          className={`h-auto w-full rounded-lg cursor-pointer ${
            selectedImage === images[0] ? "border-2 border-blue-500" : ""
          }`}
          src={selectedImage}
          alt=""
        />
      </div>
      <div className="grid grid-cols-5 gap-4">
        {images.map((image, index) => (
          <div key={index} onClick={() => handleImageClick(image)}>
            <img
              className={`h-auto max-w-full rounded-lg cursor-pointer ${
                selectedImage === image ? "border-2 border-blue-500" : ""
              }`}
              src={image}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioIdGallery;
