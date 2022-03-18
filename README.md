# Notes on React with JavaScript

## # Contents
1. [Virtual DOM](#1--virtual-dom-vdom) 
2. [JSX](#2--jsx)
3. [Components](#3--components)
4. [Props](#4--props-properties)
5. [State](#5--state)
6. [React hooks](#6--react-hooks)

## 1 # Virtual DOM (VDOM)
The virtual DOM is a programming concept where and ideal, or *virtual*, representation of a UI ( *user interface* ) is kept in memory and synced with the *real* DOM ( *document object model* ) by a library such as ReactDOM. This process is called **reconciliation**.

*Note: Virtual DOM and Shadow DOM are not the same. The shadow DOM is a browser technology designed primarily for scoping variables and css in web components*.

## 2 # JSX
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

## 3 # Components
Components are key building blocks of React application. A React component is reusable block of code, which represents a portion of the user interface. The components are responsible for building and managing the whole user interface.

### 3.1 # Type of components
1. Class components
2. Functional components

#### 3.1.1 - Class components
Class components are [JavaScript Class *(extern)*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) based components (*Introduced in ES5*). Before React 16.8, only React way you could use lifecycle events and state, is through class component.

*Note: While React team didn't deprecate or has no plan to do so as of now. They seems more focused on functional approach which is more up to date. It's better to prefer functional approach over class one. We are going to do the same here as well.* 

#### 3.1.2 - Functional components
Before React 16.8 functional components we use today were stateless. If someone wanted to use state then they had to use class components. That's why they were called *functional stateless components* sometime.

*Note: In React 16.8 react introduced **React hook**. Which helped to get rid of those limitations.*

### 3.2 # Component lifecycle
React component lifecycle is available in class based components. Components has several *lifecycle methods* that can be overridden to run code at particular times in the process. [More details on lifecycle events](docs/lifecycle.md)

## 4 # Props (Properties)
React components accepts arbitrary input, which is called **props**.

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
Which can be used as:

```jsx
function App() {
    const name = "Jack";
    
    return (
        <div>
            <Welcome name={name}>
        </div>
    );
}
```

*Note: Props stands for properties. Props is available to both class and functional components. You can name the parameter `props` anything you want. But by convention it is called props.*

## 5 # State
React class components has a built-in state object. State object is used to store property values that belongs to the component. When state changes, the component re-renders.

*Note: In functional components React uses `useState()` hook, to manage state.*

## 6 # React hooks
Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

React hooks requires it's own section as theres many things to talk about.

[More on React hooks](docs/hooks.md)
