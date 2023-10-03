import React, { useState, useEffect } from 'react';
import Profile from '../../assets/Logo.jpg';

const images = [Profile]; // Replace with your image paths
function ImageChanger() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  console.log(currentImageIndex)
  return (
    <div className="w-1/2 my-[100px] mx-[50px]">
      <img
        src={images[currentImageIndex]}
        alt="Your Image"
        className="w-50 h-50 rounded-full"
      />
    </div>
  );
}

export default ImageChanger;
