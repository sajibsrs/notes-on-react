import { useContext } from "react";
import { ThemeContext }  from "./Counter"; "./Counter";

export function ReceiveContext() {
  const count = useContext(ThemeContext);

  return (
    <>
      <h2># Context in action</h2>
      <h3>{`Countdown ${count}`}</h3>
    </>
  );
}

export default ReceiveContext;
