# Component lifecycle
Each components in React has a lifecycle which can be monitored and manipulated during its **three** main phases.

1. Mounting
2. Updating
3. Unmounting

## 1 # Mounting
Mounting means putting elements into the *actual DOM*.

React has **four** built-in methods that can be called during mounting components:

1. `constructor()`
2. `getDerivedStateFromProps()`
3. `render()`
4. `componentDidMount()`

*Note: The `render()` method is required and always gets called, others are optional and will get called if defined.*

### 1.1 # Constructor()
`constructor()` method gets called before anything else, when component is initialized and is the natural place to set up the initial **state** and other initial values.

The `constructor()` is called with props, as arguments and should always start by calling the `super(props)` before anything else, this initiates the parent constructor method and allows the component to inherit methods from its parent (`React.Component`).

```jsx
class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {theme: "dark"};
  }
  
  render() {
    return (
      <h1>Current theme {this.state.theme}</h1>
    );
  }
}

ReactDOM.render(<Section />, document.getElementById('root'));
```

*Note: You should never assign values to state object as object properties. Instead assign as **object literal***.

Don't:
```jsx
this.state.theme = "dark";
```

Do: 
```jsx
this.state = {theme: "dark"};
```

### 1.2 # getDerivedStateFromProps()
The `getDerivedStateFromProps()` method is called right before rendering the element(s) in the DOM.
This is the natural place to set the `state` object based on initial `props`.
It takes `state` as argument and returns an updated `state` object.

```jsx
class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {theme: "dark"};
  }

  static getDerivedStateFromProps(props, state) {
    return {theme: props.theme};
  }
  
  render() {
    return (
      <h1>Current theme {this.state.theme}</h1>
    );
  }
}

ReactDOM.render(<Section />, document.getElementById('root'));
```

### 1.3 # render()
The `render()` method is required and is the method that is responsible for the DOM.

```jsx
class Section extends React.Component {
  render() {
    return (
      <h1>Content of the Section component</h1>
    );
  }
}

ReactDOM.render(<Section />, document.getElementById('root'));
```

### 1.4 # componentDidMount()

## 2 # Updating

### 2.1 # getDerivedStateFromProps()

### 2.2 # shouldComponentUpdate()

### 2.3 # render()

### 2.4 # getSnapshotBeforeUpdate()

### 2.5 # componentDidUpdate()

## 3 # Unmounting

### 3.1 # componentWillUnmount()
