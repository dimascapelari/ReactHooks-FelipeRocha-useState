import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [state, setState] = useState({ count: 0, theme: "light" });

  const incrementCount = () => {
    setCount((prevState) => prevState + 1);
  };

  const incrementState = () => {
    setState((prevState) => {
      return {
        ...prevState,
        count: prevState.count + 1,
        theme: "dark",
      };
    });
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={incrementCount}>Increment</button>
      <br />
      <br />
      <hr />
      <h1>State: {state.count}</h1>
      <h1>{state.theme}</h1>
      <button onClick={incrementState}>Increment</button>
      <br />
      <br />
      <hr />
    </div>
  );
}

export default App;
