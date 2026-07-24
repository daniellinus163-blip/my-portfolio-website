"use client";

import { useEffect, useState } from "react";

export function LightningEffects() {
  const [flashIntensity, setFlashIntensity] = useState(0);

  useEffect(() => {
    // Lightning flash effect - constant non-stop
    const flashInterval = setInterval(() => {
      setFlashIntensity(1);
      setTimeout(() => setFlashIntensity(0), 50);
    }, 200);

    return () => clearInterval(flashInterval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Dramatic lightning flash overlay - golden */}
      <div 
        className="absolute inset-0 transition-opacity duration-50"
        style={{
          backgroundColor: `rgba(255, 215, 0, ${flashIntensity * 0.3})`,
          opacity: flashIntensity
        }}
      />
      
      {/* Multiple lightning bolts covering entire page */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Vertical lightning bolts */}
        <div 
          className="absolute top-0 left-[10%] w-3 h-full bg-gradient-to-b from-transparent via-[#FFD700] to-transparent opacity-0 animate-lightning1"
          style={{ opacity: flashIntensity }}
        />
        <div 
          className="absolute top-0 left-[25%] w-2 h-full bg-gradient-to-b from-transparent via-[#FF4500] to-transparent opacity-0 animate-lightning2"
          style={{ opacity: flashIntensity * 0.8 }}
        />
        <div 
          className="absolute top-0 left-[40%] w-4 h-full bg-gradient-to-b from-transparent via-[#FFD700] to-transparent opacity-0 animate-lightning3"
          style={{ opacity: flashIntensity * 0.6 }}
        />
        <div 
          className="absolute top-0 left-[55%] w-2 h-full bg-gradient-to-b from-transparent via-[#FF4500] to-transparent opacity-0 animate-lightning1"
          style={{ opacity: flashIntensity * 0.9 }}
        />
        <div 
          className="absolute top-0 left-[70%] w-3 h-full bg-gradient-to-b from-transparent via-[#FFD700] to-transparent opacity-0 animate-lightning2"
          style={{ opacity: flashIntensity * 0.7 }}
        />
        <div 
          className="absolute top-0 left-[85%] w-2 h-full bg-gradient-to-b from-transparent via-[#FF4500] to-transparent opacity-0 animate-lightning3"
          style={{ opacity: flashIntensity * 0.8 }}
        />
        
        {/* Horizontal lightning bolts */}
        <div 
          className="absolute top-[15%] left-0 w-full h-2 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent opacity-0 animate-lightning1"
          style={{ opacity: flashIntensity * 0.5 }}
        />
        <div 
          className="absolute top-[35%] left-0 w-full h-3 bg-gradient-to-r from-transparent via-[#FF4500] to-transparent opacity-0 animate-lightning2"
          style={{ opacity: flashIntensity * 0.6 }}
        />
        <div 
          className="absolute top-[55%] left-0 w-full h-2 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent opacity-0 animate-lightning3"
          style={{ opacity: flashIntensity * 0.4 }}
        />
        <div 
          className="absolute top-[75%] left-0 w-full h-3 bg-gradient-to-r from-transparent via-[#FF4500] to-transparent opacity-0 animate-lightning1"
          style={{ opacity: flashIntensity * 0.7 }}
        />
        
        {/* Diagonal lightning bolts */}
        <div 
          className="absolute top-0 left-0 w-full h-full opacity-0 animate-lightning2"
          style={{
            background: 'linear-gradient(45deg, transparent 40%, rgba(255, 215, 0, 0.3) 50%, transparent 60%)',
            opacity: flashIntensity * 0.3
          }}
        />
        <div 
          className="absolute top-0 left-0 w-full h-full opacity-0 animate-lightning3"
          style={{
            background: 'linear-gradient(-45deg, transparent 40%, rgba(255, 69, 0, 0.3) 50%, transparent 60%)',
            opacity: flashIntensity * 0.4
          }}
        />
        
        {/* Corner lightning effects */}
        <div 
          className="absolute top-0 left-0 w-32 h-32 opacity-0 animate-lightning1"
          style={{
            background: 'radial-gradient(circle at top left, rgba(255, 215, 0, 0.5) 0%, transparent 70%)',
            opacity: flashIntensity * 0.6
          }}
        />
        <div 
          className="absolute top-0 right-0 w-32 h-32 opacity-0 animate-lightning2"
          style={{
            background: 'radial-gradient(circle at top right, rgba(255, 69, 0, 0.5) 0%, transparent 70%)',
            opacity: flashIntensity * 0.5
          }}
        />
        <div 
          className="absolute bottom-0 left-0 w-32 h-32 opacity-0 animate-lightning3"
          style={{
            background: 'radial-gradient(circle at bottom left, rgba(255, 215, 0, 0.5) 0%, transparent 70%)',
            opacity: flashIntensity * 0.7
          }}
        />
        <div 
          className="absolute bottom-0 right-0 w-32 h-32 opacity-0 animate-lightning1"
          style={{
            background: 'radial-gradient(circle at bottom right, rgba(255, 69, 0, 0.5) 0%, transparent 70%)',
            opacity: flashIntensity * 0.6
          }}
        />
      </div>
    </div>
  );
}
