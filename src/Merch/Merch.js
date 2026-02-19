import React from 'react'
import Particles from './Particles';

export default function Merch() {
  return (
    <div style={{
         width: '100%', 
         height: '800px',
         position: 'relative',
        }}>
    <Particles
    particleColors={["#43379a"]}
    particleCount={600}
    particleSpread={10}
    speed={0.4}
    particleBaseSize={500}
    moveParticlesOnHover
    alphaParticles
    disableRotation={false}
    pixelRatio={1}
    />
    </div>
  )
}
