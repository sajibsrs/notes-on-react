# React hooks
Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class. Hooks allows hooking into React features, such as **state** and **[lifecycle](lifecycle.md)** methods.

*Note: Although React hooks made Class component obsolete, there are no plans to remove Class components from React.*

Conditions of using hooks:
1. Hooks can only be called inside React functional components.
2. Hooks can only be called on the top level of the component.
3. Hooks cannot be conditional.

*Note: Hooks doesn't work in React class components.*

## 1 # State hook
State is generally the data application needs to keep track of. `useState()` Hook allows tracking and processing of the state in a functional component.

```jsx
import { useState } from "react";

function Theme() {
    const [theme, setTheme] = useState("dark");

    return (
        <h1>Current theme is {theme}</h1>
        <button type="button" onClick={() => setTheme("light")}>Light</button>
    );
}

ReactDOM.render(<Theme />, document.getElementById('root'));
```
First we destructured object from import then we destructured array inside `Theme()`.

[Learn more about destructuring assignment.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)


`useState()` accepts an initial state and returns two values:
1. Current state
2. A function to update the state

## 2 # Effect hook
The `useEffect()` hook allows to perform side effects in components. Side effects are performing operation outside React component lifecycle. As **fetching data, directly updating DOM, timers and, async operations.**

`useEffect()` accepts two arguments, first one is the callback function and the second one is optional dependency as **array**. 

Unless any dependency specified component will keep triggering on every render. If we specify dependency, `useEffect()` will be triggered on dependency change. Passing an empty array will trigger `useEffect()` on initial render only.

```jsx
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function CountDown() {
    const [counter, setCounter] = useState(10);

    useEffect(() => {
        if (counter > 0) {
            setTimeout(() => {
                setCounter( counter => counter - 1);
            }, 1000);
        }
    }, [counter]);

    return <h1>Ready {counter}</h1>;
}

export default CountDown;
}

ReactDOM.render(<CountDown />, document.getElementById('root'));
```

### 2.1 # Effect cleanup
Some effects require cleanup to handle memory leaks.

**Timeouts, event listeners and some other effects that are no longer needed, should be disposed.**

```jsx
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function CountDown() {
    const [counter, setCounter] = useState(10);

    useEffect(() => {
        let timer;
        
        if (counter > 0) {
            timer = setTimeout(() => {
                setCounter( counter => counter - 1);
            }, 1000);
        }

        return () => clearTimeout(timer);
    }, [counter]);

    return <h1>Ready {counter}</h1>;
}

export default CountDown;
}

ReactDOM.render(<CountDown />, document.getElementById('root'));
```

## 3 # Reducer hook
The `useReducer()` hook is very similar to `useEffect()` hook. It allows custom state logic. In real applications there will be many state values to keep track of not just a single one. `useReducer()` hook help to manage multiple `state` and complex logic.

`useReducer()` accepts two arguments:
1. Reducer
2. Initial state

The `reducer` callback function contains custom state logic and the `initialState` contains the initial value of the `state` which often an *Object*.

The `useReducer()` returns the current `state` and a `dispatch` method.

```jsx
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
          <label>
          <input type="checkbox" 
          checked={task.done} 
          onChange={() => dispatch({ type: "task_check", id: task.id })} />
            {task.title}
          </label>
        </div>
      ))}
    </>
  );
}
```

## 4 # Context hook

## 5 # Callback hook

## 6 # Reference hook

## 7 # Imperative handle hook

## 8 # Layout effect hook

## 9 # Debug value hook

## 10 # Custom hook
