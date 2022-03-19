import { useReducer } from "react";

const initTasks = [
  {
    id: 1,
    title: "task one",
    done: false,
  },
  {
    id: 2,
    title: "task two",
    done: false,
  }
];

const reducer = (state, action) => {
  switch (action.type) {
    case "task_check":
      return state.map(task => {
        if (task.id === action.id) {
          return { ...task, done: !task.done };
        } else {
          return task;
        }
      });
    default:
      return state;
  }
}

function Task() {
  const [tasks, dispatch] = useReducer(reducer, initTasks);

  return (
    <>
      <p># useReducer hook in action</p>
      {tasks.map(task => (
        <div key={task.id}>
          <input type="checkbox" 
          id={"task-"+task.id} 
          checked={task.done} 
          onChange={() => dispatch({ type: "task_check", id: task.id })} />

          <label htmlFor={"task-"+task.id}>
            {task.title}
          </label>
        </div>
      ))}
    </>
  );
}

export default Task;
