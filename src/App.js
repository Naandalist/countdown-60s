import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds((seconds) => seconds - 1);
      }
    }, 1000);
    
    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <div className="center">
      <h1 style={{ animation: "blink 1s linear infinite" }}>
        {seconds > 0 ? `${seconds} seconds` : `Time is Up!`}
      </h1>
    </div>
  );
}

export default App;
