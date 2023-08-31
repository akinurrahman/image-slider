import React, { useState } from "react";
import sliderImg from "./Data";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    // 1 modulo 5(length of sliderImg) is equal to 1
    const nextIndex = (currentIndex + 1) % sliderImg.length;
    setCurrentIndex(nextIndex);
  };

  const handlePrev = () => {
    // 0 - 1 + 5 equal to 4 and in the 4th index last image exits
    const prevIndex = (currentIndex - 1 + sliderImg.length) % sliderImg.length;
    setCurrentIndex(prevIndex);
  };

  return (
    <div className="image-container">
      <button onClick={handlePrev}>Prev</button>
    <img src={sliderImg[currentIndex].imgUrl} alt="" />
      <button onClick={handleNext}>Next</button>
  </div>
  
  );
};

export default Slider;
