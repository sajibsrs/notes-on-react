# # React Component Props (Properties)

## # Props
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