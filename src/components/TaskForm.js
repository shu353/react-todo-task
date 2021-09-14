import React, { useState, useContext, useEffect } from "react";
import { GlobalContex } from "../context/GlobalContext";
import { useHistory, useParams } from "react-router-dom";

const TaskForm = () => {
  const { addTask, tasks, updateTask } = useContext(GlobalContex);
  const history = useHistory();
  const params = useParams();

  const [task, setTask] = useState({
    title: "",
    description: "",
    id: "",
  });

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const taskFound = tasks.find((task) => task.id === params.id);
    console.log(taskFound);
    if (taskFound) {
      setTask(taskFound);
    }
  }, [params.id, tasks]);

  const handleSumit = (e) => {
    e.preventDefault();

    if (task.id) {
      updateTask(task);
    } else {
      addTask(task);
    }

    history.push("/");
  };

  return (
    <div className="flex justify-center items-center h-3/4 ">
      <form className="bg-gray-900 p-10 " onSubmit={handleSumit}>
        <h2 className="mb-7 text-3xl">
          {" "}
          {task.id ? "editing a task" : "creating a task"}
        </h2>
        <div className="mb-5">
          <input
            type="text"
            name="title"
            value={task.title}
            placeholder="add a title"
            onChange={handleChange}
            className="py-4 px-4 focus:tex-gray-100 bg-gray-700 w-full focus:outline-none"
          />
        </div>
        <div className="mb-5">
          <textarea
            name="description"
            value={task.description}
            rows="2"
            placeholder="write a description for the task"
            onChange={handleChange}
            className="py-3 px-4 focus:tex-gray-100 bg-gray-700 w-full focus:outline-none"
          ></textarea>
        </div>

        <button className="bg-green-600 w-full hover:bg-green-400 py-2 px-4 mt-5">
          {task.id ? "edit task" : "creating a task"}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
