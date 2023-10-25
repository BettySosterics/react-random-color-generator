import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const [color, setColor] = useState('');
  return (
    <>
      <h1>React Random Color Generator</h1>
      <button
        onClick={() => {
          const newBackgroundColor = randomColor();
          setColor(newBackgroundColor);
        }}
      >
        Generate
      </button>
      <div style={{ backgroundColor: color }}>Generated Color: {color}</div>
    </>
  );
}
