import { useEffect, useRef } from 'react';

function Video2() {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    videoElement.play();
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <video
        ref={videoRef}
        src="video2.mp4" // Reemplaza con la ruta correcta del segundo video
        className="w-auto h-screen object-cover"
        muted
        playsInline
      />
    </div>
  );
}

export default Video2;
