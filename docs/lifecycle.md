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

### 1.1 # Constructor
`constructor()` method gets called before anything else, when component is initialized and is the natural place to set up the initial **state** and other initial values.

The `constructor()` is called with props, as arguments and should always start by calling the `super(props)` before anything else, this initiates the parent constructor method and allows the component to inherit methods from its parent (`React.Component`).

```jsx
class Header extends React.Component {
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

ReactDOM.render(<Header />, document.getElementById('root'));
```

## 2 # Updating

## 3 # Unmounting
