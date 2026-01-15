import React, { useState, useEffect } from 'react';
import { useDebounce } from '../hooks/useDebounce';

export function DebounceSearchDemo() {
  const [inputValue, setInputValue] = useState('');
  const [delay, setDelay] = useState(500);
  const debouncedValue = useDebounce(inputValue, delay);

  // just some fake data to search through
  const mockData = [
    'React', 'React Native', 'Redux', 'TypeScript', 'JavaScript',
    'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'GraphQL',
    'Next.js', 'Vue.js', 'Angular', 'Svelte', 'Tailwind CSS'
  ];

  const searchResults = debouncedValue
    ? mockData.filter(item =>
        item.toLowerCase().includes(debouncedValue.toLowerCase())
      )
    : [];

  // pretend we're calling an api here lol
  useEffect(() => {
    if (debouncedValue) {
      console.log('Searching for:', debouncedValue);
    }
  }, [debouncedValue]);

  return (
    <div className="demo-section">
      <h2>Debounce Search Demo</h2>

      <div className="controls">
        <div className="control-group">
          <label>Debounce Delay (ms):</label>
          <input
            type="number"
            min="0"
            max="2000"
            step="100"
            value={delay}
            onChange={(e) => setDelay(Number(e.target.value) || 500)}
          />
        </div>
      </div>

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type to search..."
        className="search-input"
      />

      <div className="value-display">
        <div className="value-row">
          <span className="value-label">Current Input: </span>
          <span className="value-content">{inputValue || '(empty)'}</span>
        </div>
        <div className="value-row">
          <span className="value-label">Debounced Value (after {delay}ms): </span>
          <span className="value-content debounced">{debouncedValue || '(empty)'}</span>
        </div>
      </div>

      <div className="results-container">
        <h3 className="results-title">Simulated Search Results:</h3>
        {debouncedValue ? (
          searchResults.length > 0 ? (
            <ul className="results-list">
              {searchResults.map((result, index) => (
                <li key={index}>{result}</li>
              ))}
            </ul>
          ) : (
            <p className="no-results">No results found.</p>
          )
        ) : (
          <p className="no-results">Type to see results.</p>
        )}
      </div>
    </div>
  );
}