import { createStore } from 'redux'

// creacion del estado
// reducer siempre devuelve un stado
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case '@counter/incremented':
      return state + 1
    case '@counter/decremented':
      return state - 1
    case '@counter/reset':
      return 0
    default:
      return state
  }
}

// redux createStore
const store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

//subscribe
store.subscribe(() => {
  console.log(store.getState())
})

//action
const actionIncrement = {
  type: '@counter/incremented'
}
const actionDecrement = {
  type: '@counter/decremented'
}
const actionReset = {
  type: '@counter/reset'
}

//eventos click
const hcMas = () => {
  store.dispatch(actionIncrement)
}
const hcMenos = () => {
  store.dispatch(actionDecrement)
}
const hcReset = () => {
  store.dispatch(actionReset)
}

export function Counter() {
  return (
    <div>
      <h1>State</h1>
      <h3>{store.getState()}</h3>
      <button onClick={hcMas}>+</button>
      <button onClick={hcMenos}>-</button>
      <button onClick={hcReset}>reset</button>
    </div>
  )
}

export { store }
