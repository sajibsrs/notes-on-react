# # Contents

## # Virtual DOM (VDOM)
The virtual DOM is a programming concept where and ideal, or *virtual*, representation of a UI ( *user interface* ) is kept in memory and synced with the *real* DOM ( *document object model* ) by a library such as ReactDOM. This process is called **reconciliation**.

*Note: Virtual DOM and Shadow DOM are not the same. The shadow DOM is a browser technology designed primarily for scoping variables and css in web components*.

## # JSX
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