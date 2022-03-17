# Notes on React with JavaScript

## # Contents

## ~ # JSX
JSX is a special syntax which stands for **JavaScript XML**. JSX has similar syntax as HTML but it's possible to combine JavaScript code inside it. Here is a example of JSX:

```jsx
function App() {
    return (
        <div>
            <h1>Hello {name}</h1>
        </div>
    );
}
```

In this example HTML like syntax is JSX code and the `{name}` is a JavaScript expression.

## 1 # Components
Components are key building blocks of React application. A React component is reusable block of code, which represents a portion of the user interface. The components are responsible for building and managing the whole user interface after all.

### 1.1 # Type of components
1. Class components
2. Functional components

#### 1.1.1 - Class components
Class components are [JavaScript Class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) based components (*Introduced in ES5*). Before React 16.8, only React way you could use lifecycle events and state, is through class component.

#### 1.1.2 - Functional components
Before React 16.8 functional components we use today were stateless. If someone wanted to use state then they had to use class components. That's why they were called *functional stateless components* sometime.

*Note: In React 16.8 react introduced **React hook**. Which solved those limitations.*

### 1.2 # Component lifecycle

## 2 # React hooks
Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

React hooks requires it's own section as theres many things to talk about. [React hooks](docs/hooks.md).
