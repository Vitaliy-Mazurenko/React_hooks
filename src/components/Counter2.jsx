import {useState} from "react"

function useCount(val = 0, step = 1){
  const [count, setCount] = useState(val)

  const reset = () => setCount(0)
  const increment = () => setCount(prev => prev + step)
  const decrement = () => setCount(prev => prev - step)
  return {count, reset, increment, decrement}

}


const Counter2 = () => {
  const {count, reset, increment, decrement} = useCount(10, 5);
  return (
    <>
      <h1>Counter 2</h1>
      <h3>count: {count}</h3>
      <button onClick={decrement} className="btn btn-primary mr-3">
        Decrement
      </button>
      <button onClick={reset} className="btn btn-warning mr-3">
        Reset
      </button>
      <button onClick={increment} className="btn btn-success">
        Increment
      </button>
    </>
  )
}

export default Counter2
