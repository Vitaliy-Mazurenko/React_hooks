import {useReducer, useEffect} from "react"

const initState = {count: 0, step: 1}

function reduce(state, action){
  switch(action.type){
    case "tick": return {...state, count: state.count + state.step}
    case 'step': return {...state, step: action.step}

    default: throw Error('this is impossible')
  }
}

const Counter1 = () => {
 const [{count, step}, dispatch] = useReducer(reduce, initState)
  
 useEffect(() => {
    const id = setInterval(() => dispatch({type: 'tick'}), 1000)
    return () => clearInterval(id)
  }, [])

  return <>
  <input type="number" value={step} 
      onChange={e => dispatch({type: 'step', step: Number(e.target.value)})}/>
  <h3>Counter_1: {count}</h3>
  </>
}

export default Counter1
