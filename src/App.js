import chalk from 'chalk';
import randomColor from 'randomcolor';

export default function App() {
  const backgroundColor = randomColor();
  const hexCode = chalk.hex(backgroundColor);

  return (
    <>
      <h1>React Random Color Generator</h1>
      <button>Generate</button>
      <div>
        Generated Color: {backgroundColor} {hexCode}
      </div>
    </>
  );
}
