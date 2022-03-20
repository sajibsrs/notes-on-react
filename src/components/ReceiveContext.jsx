import { useContext } from "react";
import { ThemeContext }  from "./Counter"; "./Counter";

export function ReceiveContext() {
  const count = useContext(ThemeContext);

  return (
    <>
      <h1>{`Countdown ${count}`}</h1>
    </>
  );
}

export default ReceiveContext;