import { useEffect, useRef } from 'react';

function Video1({ onEnded }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleVideoEnd = () => {
      if (onEnded) {
        onEnded();
      }
    };

    const videoElement = videoRef.current;
    videoElement.play();
    videoElement.addEventListener('ended', handleVideoEnd);

    return () => {
      videoElement.removeEventListener('ended', handleVideoEnd);
    };
  }, [onEnded]);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <video
        ref={videoRef}
        src="video1.mp4" // Reemplaza con la ruta correcta del primer video
        className="w-auto h-full object-cover"
        playsInline
        autoPlay={true}
        controls
      />
    </div>
  );
}

export default Video1;
