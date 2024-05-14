import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [prediction, setPrediction] = useState(null);

  const handleInputSubmit = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8080/submit_input', {  // Use the full URL here
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          input: input
        })
      });
      const result = await response.json();
      if (response.ok) {
        setPrediction(result.prediction);
        alert('Input submitted successfully.');
        setInput('');
      } else {
        alert(result.message || 'An error occurred while sending the input.');
      }
    } catch (error) {
      console.error('Error sending input:', error);
    }
  };

  return (
      <div className="app-container">
        <h1>Submit Your Input</h1>
        <div className="input-container">
          <label htmlFor="input">Input:</label>
          <textarea
              id="input"
              placeholder="Enter your input here"
              value={input}
              onChange={e => setInput(e.target.value)}
              rows="4"
          />
          <button onClick={handleInputSubmit}>Submit input</button>
          {prediction && (
              <div className="prediction-result">
                <h2>Prediction Result</h2>
                <p>{prediction}</p>
              </div>
          )}
        </div>
      </div>
  );
}

export default App;
