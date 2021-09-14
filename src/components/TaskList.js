import React, { useContext } from "react";
import { GlobalContex } from "../context/GlobalContext";
import { Link } from "react-router-dom";

const TaskList = () => {
  const { tasks, deleteTask, toogleTaskDone } = useContext(GlobalContex);

  return (
    <div className="flex justify-center">
      <div className="w-6/12">
        {tasks.map((task) => (
          <div
            className="bg-gray-900 px-20 py-5 text-white shadow-2xl mb-4 flex justify-between"
            key={task.id}
          >
            <div>
              <h1>{task.title}</h1>
              <p>{task.description}</p>
              <h6>{task.id}</h6>
              <button
                className="bg-purple-600 hover:bg-purple-500 py-1 px-2 mt-3"
                onClick={() => toogleTaskDone(task.id)}
              >
                {task.done ? "undone" : "done"}
              </button>
            </div>
            <div>
              <Link
                to={`/edit/${task.id}`}
                className="bg-bg-gray-500 hover:bg-gray-500 py-2 px-2 mr-2"
              >
                edit
              </Link>
              <button
                className="bg-red-600 hover:bg-red-500 py-2 px-4 mr-2"
                onClick={() => deleteTask(task.id)}
              >
                delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
