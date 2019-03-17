import {useState, useEffect} from "react"

function useItems(initialValue) {
  const [inputValue, setInputValue] = useState(initialValue)
  const [loading, setLoading] = useState(false)
  const [items, setItems] = useState([])

  const handleChange = e => setInputValue(e.target.value)

  useEffect(() => {
    if (inputValue) {
      setLoading(true)
      fetch(`http://swapi.dev/api/${inputValue}`)
        .then(r => r.json())
        .then(({results}) => {
          setItems(results)
          setLoading(false)
        })
    } else {
      setItems([])
    }
  }, [inputValue])

  return {
    inputValue,
    handleChange,
    loading,
    items,
  }
}

const Items = () => {
  const {inputValue, onChange, loading, items} = useItems("films")

  return (
    <div className="col-md-4">
      <div className="form-group">
        <label>Enter item</label>
        <input type="text" className="form-control" />
        <button type="button" className="btn btn-primary mt-3">
          Send request
        </button>
      </div>
      {loading ? <h1>...Loading...</h1> : <h1>Total : {items.length}</h1>}
    </div>
  )
}

export default Items
