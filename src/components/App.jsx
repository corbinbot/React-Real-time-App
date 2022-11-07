import React, { useState } from "react";

function App() {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString("en-US", {
      hour12: false
    })
  );

  function sayTime() {
    setTime(
      new Date().toLocaleTimeString("en-US", {
        hour12: false
      })
    );
  }
  setInterval(sayTime, 1000);
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={sayTime}>Get Time</button>
    </div>
  );
}

export default App;
