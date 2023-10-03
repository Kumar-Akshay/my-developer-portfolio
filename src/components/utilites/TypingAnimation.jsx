import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function TypingAnimation() {
  const sequence = [
    "I'm a C# Developer",
    1000,
    "I'm a FullStack Developer",
    1000,
    "I'm a .NET Developer",
    1000,
    "I'm a Peneration Testing",
    1000,
  ];
  return (
    <h2 className='text-3xl sm:text-4xl font-bold'>
      <TypeAnimation
        sequence={sequence}
        wrapper="span"
        speed={50}
        style={{ color: 'white' }}
        repeat={Infinity}
      />
    </h2>
  );
}

export default TypingAnimation;
