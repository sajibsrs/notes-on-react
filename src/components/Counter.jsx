import { createContext, useContext, useEffect, useState } from "react";
import ReceiveContext from "./ReceiveContext";

export const ThemeContext = createContext();

function CountDown() {
  const [counter, setCounter] = useState(10);

  useEffect(() => {
    let timer;

    if (counter > 0) {
      timer = setTimeout(() => {
        setCounter(counter => counter - 1);
      }, 1000);
    }

    return () => clearTimeout(timer);
  }, [counter]);

  return (
    <>
      
      <ThemeContext.Provider value={counter}>
        <p># useState and useEffect hooks in action</p>
        <h2>Ready {counter}</h2>
        <ReceiveContext />
      </ThemeContext.Provider>
    </>
  );
}

export default CountDown;
