import { createContext, useReducer } from "react";
import { v4 } from "uuid";

import appReducer from "./AppReducer";

const initialState = {
  tasks: [
    {
      id: v4(),
      title: "Smoke weed every day",
      description: "dont forget the weed",
      done: false,
    },
    {
      id: v4(),
      title: "study",
      description: "gotta study",
      done: false,
    },
  ],
};

export const GlobalContex = createContext(initialState);

export const ContexProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const addTask = (task) => {
    dispatch({
      type: "ADD_TASK",
      payload: {
        ...task,
        id: v4(),
        done: false,
      },
    });
  };

  const deleteTask = (id) => {
    dispatch({
      type: "DELETE_TASK",
      payload: id,
    });
  };

  const updateTask = (task) => {
    dispatch({
      type: "UPDATE_TASK",
      payload: task,
    });
  };

  const toogleTaskDone = (id) => {
    dispatch({
      type: "TOOGLE_TASK_DONE",
      payload: id,
    });
  };

  return (
    <GlobalContex.Provider
      value={{ ...state, addTask, deleteTask, updateTask, toogleTaskDone }}
    >
      {children}
    </GlobalContex.Provider>
  );
};
