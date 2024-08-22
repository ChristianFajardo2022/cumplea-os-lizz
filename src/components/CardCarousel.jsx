import React, { useState } from 'react';

function CardCarousel() {
  const images = [
    'img1.jpeg', 'img2.jpeg', 'img3.jpeg', 'img4.jpeg', 'img5.jpeg',
    'img6.jpeg', 'img7.jpeg', 'img8.jpeg', 'img9.jpeg', 'img10.jpeg',
    'img11.jpeg', 'img12.jpeg', 'img13.jpeg', 'img14.jpeg', 'img15.jpeg',
    'img16.jpeg', 'img17.jpeg', 'img18.jpeg', 'img19.jpeg', 'img20.jpeg',
    'img21.jpeg', 'img22.jpeg', 'img23.jpeg',
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
    <div className="w-full flex items-center justify-center px-4 py-8 my-32 relative">
      <div className="relative w-full max-w-4xl h-[400px] flex items-center justify-center">
        <div className="flex items-center justify-center w-full h-full overflow-hidden relative">
          {images.map((src, index) => {
            const isCurrent = index === currentIndex;
            const isPrevious = index === (currentIndex - 1 + images.length) % images.length;
            const isNext = index === (currentIndex + 1) % images.length;

            return (
              <div
                key={index}
                className={`absolute transition-transform duration-700 ease-in-out ${
                  isCurrent
                    ? 'w-[400px] h-auto z-20 transform scale-110'
                    : isPrevious || isNext
                    ? 'w-[200px] h-[300px] z-10 opacity-60 transform scale-90'
                    : 'w-[150px] h-[250px] z-0 opacity-40 transform scale-80'
                }`}
                style={{
                  left: isCurrent ? '50%' : isPrevious ? '25%' : '75%',
                  transform: `translateX(-50%) ${isCurrent ? '' : 'scale(0.8)'}`,
                }}
              >
                <img
                  src={src}
                  alt={`Foto ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg shadow-xl"
                />
              </div>
            );
          })}
        </div>
      </div>

      <button
        onClick={handlePrev}
        className="absolute left-28 top-1/2 transform -translate-y-1/2 text-black p-3 rounded-full shadow-2xl hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
      >
        <img src='./btnIzquierda.png' alt="Anterior" className="w-20" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-28 top-1/2 transform -translate-y-1/2 text-black p-3 rounded-full shadow-2xl hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
      >
        <img src='./btnDerecha.png' alt="Siguiente" className="w-20" />
      </button>
    </div>
  );
}

export default CardCarousel;
