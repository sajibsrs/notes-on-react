# # React components

## # Components
Components are key building blocks of React application. A React component is reusable block of code, which represents a portion of the user interface. The components are responsible for building and managing the whole user interface.

### # Type of components
1. Functional components
2. Class components

#### # Functional components
Before React 16.8 functional components we use today were stateless. If someone wanted to use state then they had to use class components. That's why they were called *functional stateless components* sometime.

*Note: In React 16.8 react introduced **React hook**. Which helped to get rid of those limitations.*

[More on React hooks](docs/hooks.md)

#### # Class components
Class components are [JavaScript Class *(extern)*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) based components (*Introduced in ES5*). Before React 16.8, only React way you could use lifecycle events and state, is through class component.

*Note: While React team didn't deprecate or has no plan to do so as of now. They seems more focused on functional approach which is more up to date. It's better to prefer functional approach over class one. We are going to do the same here as well.* 