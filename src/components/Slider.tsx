import React, { useState, useEffect } from 'react';
import slider1 from "../assets/slider1.png"
import slider2 from "../assets/slider2.png"
import slider3 from "../assets/slider3.png"

interface ImageSliderProps {
  images?: string[];
  autoPlayInterval?: number;
}

const InfiniteImageSlider: React.FC<ImageSliderProps> = ({ 
  images = [
    slider1,
    slider2,
    slider3
  ],
  autoPlayInterval = 3000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [images.length, autoPlayInterval]);


  return (
    <div className="relative w-full  mx-auto bg-gray-900 rounded-lg overflow-hidden shadow-2xl mt-10">
      {/* Main slider container */}
      <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-full h-full">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteImageSlider;