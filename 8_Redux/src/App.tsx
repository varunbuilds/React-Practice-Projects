import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h2>Redux Example</h2>
        <Counter />
      </div>
    </>
  );
}

export default App;
