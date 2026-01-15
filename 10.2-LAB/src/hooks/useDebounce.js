import { useState, useEffect } from 'react';

// basically waits a bit before updating the value so we're not spamming updates
// useful for search bars and stuff like that
export function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // start the timer
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // clear the timer if the value changes again (cleanup)
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}