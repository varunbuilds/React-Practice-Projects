import { useState } from "react";

function Input({ tasks, setTasks }) {
  const [input, setInput] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    setTasks([...tasks, input]);
    setInput("");
  };

  return (
    <>
      <div className=" flex justify-center p-4">
        <input
          className="border-2 border-black rounded-lg p-2"
          type="text"
          placeholder="Add a new task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-green-500 text-white rounded-lg p-2 ml-2"
          onClick={handleAddTask}
        >
          Add
        </button>
      </div>
    </>
  );
}

export default Input;
