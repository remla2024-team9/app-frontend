import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  const handleInputSubmit = async () => {
    try {
      const response = await fetch('/submit_input', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          input: input // The input entered in the text field
        })
      });
      const result = await response.json();
      if (response.ok) {
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
        </div>
      </div>
  );
}

export default App;
