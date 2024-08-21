import { useState } from 'react';
import Video1 from './components/Video1';
import Video2 from './components/Video2';
import CardsSection from './components/CardSection';
import AnimatedScroll from './components/CardCarousel';
import './confetti.css'; // Importa el archivo CSS para el confeti

function App() {
  const [showVideo1, setShowVideo1] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleVideo1End = () => {
    setShowVideo1(false);
    setShowConfetti(true); // Muestra el confeti cuando termina el video 1
  };

  return (
    <div className='relative bg-cover' style={{ backgroundImage: 'url(./fondo.png)' }}>
      <div className="w-full h-screen overflow-hidden bg-cover">
        {showVideo1 ? <Video1 onEnded={handleVideo1End} /> : <Video2 />}
        {showConfetti && (
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            {Array.from({ length: 500 }).map((_, index) => (
              <div key={index} className="confetti" style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 5 + 5}s`,
                backgroundColor: ['#F00', '#0F0', '#00F', '#FF0', '#0FF', '#F0F', '#F90', '#0F9', '#F6F', '#F4F'][Math.floor(Math.random() * 10)],
              }} />
            ))}
          </div>
        )}
      </div>
      <AnimatedScroll />
      <CardsSection />
    </div>
  );
}

export default App;
