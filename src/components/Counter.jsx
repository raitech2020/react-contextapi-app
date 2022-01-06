import {Link} from "react-router-dom";
import {useContext} from "react";
import {CounterContext} from "../context/CounterContext";

function Counter() {
    const {
        count, setCount,
        increment, decrement,
        incrementByAmount,
        decrementByAmount
    } = useContext(CounterContext)

    return (
        <>
            <button onClick={() => increment()}>Increment</button>
            <button onClick={() => decrement()}>Decrement</button>
            <br/>
            <button onClick={() => incrementByAmount(2)}>IncrementByAmount</button>
            <button onClick={() => decrementByAmount(2)}>DecrementByAmount</button>
            <p>Count: {count}</p>
            <Link to="/">Go to Home</Link>
        </>
    )
}

export default Counter
