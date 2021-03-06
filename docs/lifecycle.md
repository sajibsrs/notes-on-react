# Component lifecycle
**React lifecycle events are only available in class components.**

Each components in React has a lifecycle which can be monitored and manipulated during its **three** main phases.

1. Mounting
2. Updating
3. Unmounting

## # Mounting
Mounting means putting elements into the *actual DOM*.

React has **four** built-in methods that can be called during mounting components:

1. `constructor()`
2. `getDerivedStateFromProps()`
3. `render()`
4. `componentDidMount()`

*Note: The `render()` method is required and always gets called, others are optional and will get called if defined.*

### # Constructor()
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

### # getDerivedStateFromProps()
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

### # render()
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
The `componentDidMount()` method is called after the component has rendered.
This is the place to run statements that requires the render completion.

```jsx
class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {theme: "dark"};
  }

  componentDidMount() {
      setTimeout(() => {
          this.setState({ theme: "light" });
      }, 1000);
  }
  
  render() {
    return (
      <h1>Current theme {this.state.theme}</h1>
    );
  }
}

ReactDOM.render(<Section />, document.getElementById('root'));
```

## # Updating
Whenever there is a change in the component `state` or `props` React triggers a component update.
React has **five** built-in methods that gets called in specified order when component is updated.

1. `getDerivedStateFromProps()`
2. `shouldComponentUpdate()`
3. `render()`
4. `getSnapshotBeforeUpdate()`
5. `componentDidUpdate()`

### # getDerivedStateFromProps()
This is the first method that gets called when a component gets updated.

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

### # shouldComponentUpdate()
In the `shouldComponentUpdate()` method you can return a **Boolean** value that specifies whether React should continue with the rendering or not.

The default value is `true`. If set to `false` React will continue with it's normal procedures but omits re-render.

```jsx
class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {theme: "dark"};
  }

  shouldComponentUpdate() {
    return false;
  }
  
  changeTheme = () => {
    this.setState({ theme: "light" })
  }
  
  render() {
    return (
      <h1>Current theme {this.state.theme}</h1>
      <button type="button" onClick={this.changeTheme}>Change Theme</button>
    );
  }
}

ReactDOM.render(<Section />, document.getElementById('root'));
```

*Note: Notice how the method gets called inside jsx.*

It's:
```jsx
onClick={this.changeTheme}
```
Not:
```jsx
onClick={this.changeTheme()}
```

### # render()
The `render()` method gets called when a component gets *updated* and re-renders with new changes.

### # getSnapshotBeforeUpdate()
The `getSnapshotBeforeUpdate()` method is used to access `props` and `state` values before the update. That means their previous values can be accessed even after the update.

```jsx
class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {theme: "dark"};
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({theme: "light"})
    }, 1000)
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML =
    "Before the update, the theme was " + prevState.theme;
  }

  componentDidUpdate() {
    document.getElementById("div2").innerHTML =
    "The updated theme is " + this.state.theme;
  }

  render() {
    return (
      <div>
        <h1>Current theme {this.state.theme}</h1>
        <div id="div1"></div>
        <div id="div2"></div>
      </div>
    );
  }
}

ReactDOM.render(<Section />, document.getElementById('root'));
```

###  # componentDidUpdate()
The `componentDidUpdate()` method is called after the component is updated in the DOM.

## # Unmounting
Unmounting is when a component is removed from the DOM.

### # componentWillUnmount()
The `componentWillUnmount()` method is called when the component is about to be removed from the DOM.