# React hooks
Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class. Hooks allows hooking into React features, such as **state** and **[lifecycle](lifecycle.md)** methods.

*Note: Although React hooks made Class component obsolete, there are no plans to remove Class components from React.*

Conditions of using hooks:
* Hooks can only be called inside React functional components.
* Hooks can only be called on the top level of the component.
* Hooks cannot be conditional.

*Note: Hooks doesn't work in React class components.*

## # State hook
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
* Current state
* A function to update the state

## # Effect hook
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

### # Effect cleanup
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

## # Reducer hook
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

## # Context hook
React **Context** is a way to manage state globally. Instead of the per component states **Context** maintains state globally, so anyone can access it.

**Context** can be combined with the **useState()** hook to share *state* between deeply nested components more easily.

*Note: **state** should be held by the uppermost parent the the stack that requires access to the state. Then we'd require to pass **state** as **props** to the child components.*

In order to use Context we need **three** things:
1. Create context
2. Context provider
3. Use context

### # Create context
To create context, we need **createContext()** hook.

```jsx
const ThemeContext = createContext();
```

### # Context provider
We need to wrap child components in the context provider and supply the state through **value** property.

```jsx
function ComponentOne() {
  const [theme, setTheme] = useState("dark");
}

return (
  <ThemeContext.Provider value={theme}>
    <h1>{`Current theme: ${theme}`}</h1>
    <ComponentSix />
  </ThemeContext.Provider>
);
```
### # User context
In order to use the Context in a child component, we need to access it using the `useContext` hook.

```jsx
function ComponentSix() {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <h1>{`Current theme ${theme}`}</h1>
    </div>
  );
}
```

## # Callback hook
The `useCallback()` hook returns a memoized callback function. Memoization works similar to caching mechanism. It stores the value and uses later if no new calculation is required, rather than recalculating value in on every render. *Which can improve performance.*

*Note: Memoization is used for value that doesn't need to be recalculated between renders.*

[Learn more about Callback](https://reactjs.org/docs/hooks-reference.html#usecallback)

## # Memo hook

## # Reference hook
In the past react **ref** was strongly associated with the DOM. After arrival of **hooks** it can be used just as a reference to anything (DOM node, JS value, etc).

*Note: Beside accessing DOM, **useRef** hook can be used similarly to state to hold value, but where re-render is not intended. As **useRef** hook holds its value for whole lifetime  of the component.*

```jsx
function Counter() {
  const clicked = useRef(false);
  const [count, setCount] = useState(0);

  function onClick() {
    setCount(count => count + 1);
    clicked.current = true;
  }

  console.log("Clicked: " + clicked.current);

  return (
    <>
      <p>{count}</p>
      <button type="button" onClick={onClick}>
        Increment
      </button>
    </>
  );
}
```

*Note: Only renders once, as no change in **state** means no re-render.*

```jsx
function ComponentDOM({ isFocus }) {
  const ref = useRef();

  useEffect(() => {
    if (isFocus) {
      ref.current.focus();
    }
  }, [isFocus]);

  return (
    <>
      <p>{isFocus}</p>
      <button type="text" ref={ref}>
    </>
  );
}
```

## # Imperative handle hook

## # Layout effect hook

## # Debug value hook

## # Custom hook

[Learn more about these hooks](https://reactjs.org/docs/hooks-reference.html)
