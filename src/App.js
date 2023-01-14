import React, { useEffect, useState } from "react";
import CounterComponent from "./CounterComponent";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("count", count);
  }, [count]);
  return (
    <div className="app">
      <CounterComponent count={count} setCount={setCount} />
    </div>
  );
}

export default App;
