import {createContext, useState} from "react";

export const CounterContext = createContext({})

export const CounterContextProvider = ({children}) => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    const incrementByAmount = (amount) => {
        setCount(count + amount)
    }

    const decrementByAmount = (amount) => {
        setCount(count - amount)
    }

    return (
        <CounterContext.Provider value={{
            count, setCount,
            increment, decrement,
            incrementByAmount,
            decrementByAmount
        }}>
            {children}
        </CounterContext.Provider>
    )
}
