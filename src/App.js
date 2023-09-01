import React, { useState } from 'react';
import './App.css';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  
  const handleNum1Change = (e) => {
    if (/^[+-]?\d+(\.\d*)?$/.test(e.target.value) || e.target.value === '') {
      setNum1(e.target.value);
    }
  };
  
  const handleNum2Change = (e) => {
    if (/^[+-]?\d+(\.\d*)?$/.test(e.target.value) || e.target.value === '') {
      setNum2(e.target.value);
    }
  };
  
  const handleAdd = () => {
    setResult(parseFloat(num1) + parseFloat(num2));
  };
  
  const handleSubtract = () => {
    setResult(parseFloat(num1) - parseFloat(num2));
  };
  
  const handleMultiply = () => {
    setResult(parseFloat(num1) * parseFloat(num2));
  };
  
  const handleDivide = () => {
    if (parseFloat(num2) !== 0) {
      setResult(parseFloat(num1) / parseFloat(num2));
    } else {
      setResult('Cannot divide by zero');
    }
  };
  
  return (
    <div className="calculator-container">
      <div className="input-container">
        <input type="text" value={num1} onChange={handleNum1Change} />
        <input type="text" value={num2} onChange={handleNum2Change} />
      </div>
      <div className="button-container">
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleSubtract}>Subtract</button>
        <button onClick={handleMultiply}>Multiply</button>
        <button onClick={handleDivide}>Divide</button>
      </div>
      <h1 className="result">{result}</h1>
    </div>
  );
}

function App() {
  return (
    <div className="app-container">
      <h1 className="app-heading">Simple Calculator</h1>
      <Calculator />
    </div>
  );
}

export default App;