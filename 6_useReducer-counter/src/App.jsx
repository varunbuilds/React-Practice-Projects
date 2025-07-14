import { useState, useReducer } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, 0);

  function reducer(state, action) {
    if (action.type == "increment") {
      return state + action.payload;
    }
    if (action.type == "decrement") {
      return state - action.payload;
    }
  }

  return (
    <>
      <h1 className="m-3 text-center  text-4xl">Counter with useReducer</h1>
      <div className="flex justify-center flex-col text-2xl p-5">
        <h3 className="text-center">UseState:</h3>
        <button
          className="hover:text-blue-400 cursor-pointer"
          onClick={() => setCount((count) => count + 1)}
        >
          increase
        </button>
        <p className="text-center">{count}</p>
        <button
          className="hover:text-blue-400 cursor-pointer"
          onClick={() => setCount((count) => count - 1)}
        >
          decrease
        </button>
      </div>

      <div className="flex justify-center flex-col text-2xl p-5">
        <h3 className="text-center">UseReducer:</h3>
        <button
          className="hover:text-blue-400 cursor-pointer"
          onClick={() => dispatch({ type: "increment", payload: 1 })}
        >
          increase
        </button>
        <p className="text-center">{state}</p>
        <button
          className="hover:text-blue-400 cursor-pointer"
          onClick={() => dispatch({ type: "decrement", payload: 1 })}
        >
          decrease
        </button>
      </div>
    </>
  );
}

export default App;
