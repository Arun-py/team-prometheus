import React from 'react';
import bgVideo from '../../images/bg_fireparticles.mp4';

const FireBackground = () => {
  return (
    <div className="global-fire-background">
      <video autoPlay loop muted playsInline>
        <source src={bgVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default FireBackground;
