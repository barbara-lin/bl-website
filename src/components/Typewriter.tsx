import React from 'react';
import Typewriter from 'typewriter-effect';

const TypewriterComponent: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="font-mono text-6xl text-black bg-white bg-opacity-50 p-5 rounded">
        <Typewriter
        onInit={(typewriter) => {
            typewriter
              .typeString('Welcome')
              .pauseFor(1000) // Pause for 5 seconds
              .deleteAll()
              .typeString(' the evidence of atomization. the proof that things fall apart.')
              .pauseFor(5000) // Pause for 5 seconds
              .deleteAll()
              .typeString('the most trivial attributes of other people seem to us to form an inseparable part of their personality')
              .pauseFor(5000) // Pause for 5 seconds
              .start();
          }}
          options={{
          
            loop: true,
            delay: 40,
            deleteSpeed: 10,
          }}
        />
      </div>
    </div>
  );
};

export default TypewriterComponent;
