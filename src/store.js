import { noteReducer } from './reducers/noteReducer'
import { filterReducer } from './reducers/filterReducer'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  note: noteReducer,
  filter: filterReducer
})

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
)
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
