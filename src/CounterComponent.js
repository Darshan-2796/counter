const CounterComponent = ({ count, setCount }) => {
  return (
    <div className="container">
    <div className="title">Counter</div>
      <div className="main">
        <h1>Counter using React</h1>
        <div className="count">Your Current Count is: {count}</div>
        {count < 0 && <div className="error">Error: Cannot go below 0</div>}
        <div>
          <button onClick={() => setCount((prev) => prev - 1)}>
            Decrement
          </button>
          <button onClick={() => setCount((prev) => prev + 1)}>
            Increment
          </button>
          {count > 10 && (
            <button onClick={() => setCount(0)} className="reset-counter">
              Go Back to 0
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CounterComponent;
