import React, { useState, useEffect } from 'react';

const TextChanger = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const delay = charIndex < props.texts[currentIndex].length ? props.speed : 3000; // Delay between characters or phrases
    console.log(delay);
    const intervalId = setTimeout(() => {
      if (charIndex < props.texts[currentIndex].length) 
      {
        setCurrentText((prevText) => prevText + props.texts[currentIndex][charIndex]);
        setCharIndex((prevIndex) => prevIndex + 1);
      } 
      else
      {
        if(!props.textChangeStop) 
        {
              // After displaying the entire text, reset and move to the next text
              setCurrentText('');
              setCharIndex(0);
              setCurrentIndex((prevIndex) => (prevIndex + 1) % props.texts.length);
        }
      }
    }, delay);

    return () => clearTimeout(intervalId); // Clear the timeout on unmount
  }, [charIndex, currentIndex]);

  const h1Style = {
    width: currentText ? 'auto' : '120px', // Adjust the width as needed
    overflow: 'hidden',
  };


  return (
    <div>
      <h1 className="text-4xl font-bold text-blue-500"  style={h1Style}>
      {props.title === undefined ? '' : props.title } {currentText}
      </h1>
    </div>
  );
};

export default TextChanger;
