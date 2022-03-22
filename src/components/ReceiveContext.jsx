import { useContext } from "react";
import { ThemeContext }  from "./Counter"; "./Counter";

export function ReceiveContext(props) {
  const count = useContext(ThemeContext);

  const handleChange = (e) => {
    props.handleChange(e);
  }

  return (
    <>
      <input type="text" onChange={handleChange} />
      <h2># Context in action</h2>
      <h3>{`Countdown ${count}`}</h3>
    </>
  );
}

export default ReceiveContext;
