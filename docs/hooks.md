# React hooks
Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class. Hooks allows hooking into React features, such as **state** and **[lifecycle](lifecycle.md)** methods.

Rules of using hooks:
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
First we destructured object from import then we destructured array inside `Theme()`. [Learn more about destructuring assignment.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)


`useState()` accepts an initial state and returns two values:
1. Current state
2. A function to update the state



## 2 # Effect hook

## 3 # Reducer hook

## 4 # Context hook

## 5 # Callback hook

## 6 # Reference hook

## 7 # Imperative handle hook

## 8 # Layout effect hook

## 9 # Debug value hook

## 10 # Custom hook
