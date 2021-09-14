export default function appReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return {
        tasks: [...state.tasks, action.payload],
      };
    case "DELETE_TASK":
      return {
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case "UPDATE_TASK":
      const updatedTask = action.payload;

      const updatedTasks = state.tasks.map((task) => {
        if (task.id == updatedTask.id) {
          task.title = updatedTask.title;
          task.description = updatedTask.description;
        }
        return task;
      });
      return {
        tasks: updatedTasks,
      };

    case "TOOGLE_TASK_DONE":
      const doneTask = action.payload;

      const doneTasks = state.tasks.map((task) => {
        if (task.id == doneTask) {
          return { ...task, done: !task.done };
        }
        return task;
      });
      return {
        tasks: doneTasks,
      };
    default:
      return state;
  }
}
