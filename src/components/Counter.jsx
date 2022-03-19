import { useEffect, useState } from "react";

function CountDown() {
    const [counter, setCounter] = useState(10);

    useEffect(() => {
        let timer;

        if (counter > 0) {
            timer = setTimeout(() => {
                setCounter( counter => counter - 1);
            }, 1000);
        }

        return () => clearTimeout(timer);
    }, [counter]);

    return (
        <>
            <p># useState and useEffect hooks in action</p>
            <h2>Ready {counter}</h2>
        </>
    );
}

export default CountDown;
