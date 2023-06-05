import { useState } from 'react';
import './App.css';

function App() {
  let [count, setCount] = useState(0);
  let [value, setValue] = useState(1);

  const handleIncrement = () => {
    setCount(count + value)
  }

  const handleDecrement = () => {
    setCount(count - value)
  }

  const handleReset = () => {
    setCount(0);
  }

  const handleAction = (inputNum) => {
    if (inputNum) {
      setValue(inputNum);
    }
    else {
      setValue(1);
    }
  }

  return (
    <div className='container'>
      <h1>Counter</h1>
      <h2 style={{ color: count > 0 ? "green" : count < 0 ? "red" : "black" }}>{count}</h2>
      <div>
        <button className='increase' onClick={handleIncrement}>Increment</button>
        <button className='decrease' onClick={handleDecrement}>Decrement</button>
        <button className='reset' onClick={handleReset}>Reset</button>
      </div>
      <div className="input-container">
        <label htmlFor='input'>Enter a number to perform action</label>
        <input type="number"
          name="input" id="input"
          onChange={(e) => handleAction(e.target.valueAsNumber)} />
      </div>

    </div>
  );
}

export default App;
