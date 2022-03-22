import { createContext, useEffect, useState } from "react";
import ReceiveContext from "./ReceiveContext";

export const ThemeContext = createContext();

function CountDown() {
  const [counter, setCounter] = useState(10);
  const [input, setInput] = useState("");

  useEffect(() => {
    let timer;

    if (counter > 0) {
      timer = setTimeout(() => {
        setCounter(counter => counter - 1);
      }, 1000);
    }

    return () => clearTimeout(timer);
  }, [counter]);

  const onChange = (e) => {
    setInput(e.target.value);
  }
  
  return (
    <>
      <ThemeContext.Provider value={counter}>
        <p># useState and useEffect hooks in action</p>
        <h2>Ready {counter}</h2>
        <p>Input value: {input}</p>
        <ReceiveContext handleChange={onChange} />
      </ThemeContext.Provider>
    </>
  );
}

export default CountDown;
