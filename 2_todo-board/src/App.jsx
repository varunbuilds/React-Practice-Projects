import { useState, useEffect } from "react";
import Input from "./components/Input";
import Board from "./components/Board";

function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  console.log("Tasks from local storage:", tasks);

  console.log(tasks);
  return (
    <>
      <h4 className="text-center text-4xl">TODO BOARD</h4>
      <Input tasks={tasks} setTasks={setTasks} />
      <div className="grid grid-cols-3 gap-4 p-4">
        {tasks.map((task, index) => (
          <Board
            key={index}
            index={index}
            task={task}
            tasks={tasks}
            setTasks={setTasks}
          />
        ))}
      </div>
    </>
  );
}

export default App;
