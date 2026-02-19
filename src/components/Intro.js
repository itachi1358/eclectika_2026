import React from 'react';
import { useNavigate } from 'react-router-dom';
import introVideo from '../assets/intro1.mp4';

export default function Intro() {
  const navigate = useNavigate();

  const goToLanding = () => {
    navigate('/landing');
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <video
        src={introVideo}
        autoPlay
        onEnded={goToLanding}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />

      {/* Skip button */}
      <button
        onClick={goToLanding}
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          padding: '10px 18px',
          background: 'rgba(0,0,0,0.6)',
          color: '#fff',
          border: '1px solid rgba(255,255,255,0.4)',
          borderRadius: '6px',
          cursor: 'pointer',
          backdropFilter: 'blur(6px)'
        }}
      >
        Skip
      </button>
    </div>
  );
}
