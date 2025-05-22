function Board({ index, task, tasks, setTasks }) {
  const handleDelete = () => {
    let removedIndex = tasks.indexOf(task);
    tasks.splice(removedIndex, 1);
    setTasks([...tasks]);
  };

  return (
    <>
      <div
        key={index}
        className="bg-white flex flex-col items-center p-4 rounded shadow-md hover:shadow-lg transition-shadow duration-300"
      >
        <h3 className="text-xl font-semibold">{task}</h3>
        <button
          className="mt-2 bg-red-500 text-white px-4 py-2 rounded"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </>
  );
}

export default Board;
