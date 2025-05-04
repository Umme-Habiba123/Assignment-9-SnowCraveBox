import React, { useEffect, useState } from 'react';
import photo1 from '../assets/pic-1.jpg';
import photo2 from '../assets/pic-2.jpg';
import photo3 from '../assets/pic-3.jpg';
import photo4 from '../assets/pic-4.jpg';

const images = [
  { src: photo1, position: 'center' },
  { src: photo2, position: 'center' },
  { src: photo3, position: 'bottom' },
  { src: photo4, position: 'center' },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="w-full overflow-hidden relative mb-10 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px]">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`Slide ${index + 1}`}
            className="w-full flex-shrink-0 
              h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px]
              object-cover 
              object-center
              sm:scale-100 scale-[0.85] transition-all duration-700 ease-in-out"
            style={{ objectPosition: image.position }}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute left-2 right-2 top-1/2 transform -translate-y-1/2 flex justify-between z-10">
        <button onClick={prevSlide} className="btn btn-circle btn-sm md:btn-md">❮</button>
        <button onClick={nextSlide} className="btn btn-circle btn-sm md:btn-md">❯</button>
      </div>
    </div>
  );
};

export default Slider;
