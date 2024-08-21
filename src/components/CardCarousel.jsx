import React, { useState } from 'react';

function CardCarousel() {
  const images = [
    'cepeda.jpg', 'salitre.jpg', 'cena.jpg', 'pueblito.jpg', 'sorpresa.jpg',
    'salitre.jpg', 'cena.jpg', 'cepeda.jpg', 'pueblito.jpg', 'sorpresa.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="relative w-full max-w-2xl h-96">
        {images.map((src, index) => {
          const positionOffset = (index - currentIndex + images.length) % images.length;
          const scale = positionOffset === 0 ? 1 : 0.8;
          const zIndex = positionOffset === 0 ? 2 : 1;
          const translateX = positionOffset * 60 - 120;
          const rotateY = positionOffset * 10;

          return (
            <div
              key={index}
              className="absolute w-full max-w-md"
              style={{
                transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
                transition: 'transform 0.5s ease-in-out',
                zIndex: zIndex,
              }}
            >
              <img
                src={src}
                alt={`Foto ${index + 1}`}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          );
        })}
              <button
        onClick={handlePrev}
        className="absolute left-[-240px] top-1/2 transform -translate-y-1/2 bg-white text-white p-2 rounded-full hover:bg-green-500"
      >
        ◀
      </button>
      <button
        onClick={handleNext}
        className="absolute right-[-200px] top-1/2 transform -translate-y-1/2 bg-white text-white p-2 rounded-full hover:bg-green-500"
      >
        ▶
      </button>

      </div>
    </div>
  );
}

export default CardCarousel;
