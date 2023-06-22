import { createNew, getNotes } from '../services/notes'

// reducer created
export const noteReducer = (state = [], action) => {
  console.log('action', action)
  switch (action.type) {
    case '@note/created':
      // return state.concat(action.payload)
      return [...state, action.payload]
    case '@note/init':
      return action.payload
    default:
      return state
  }
}
//action created
// que crack repazar poco, tuve un problemin con pasar el title hasta aca xd
export const actionCreated = title => {
  return async dispatch => {
    const newNota = await createNew(title)
    dispatch({
      type: '@note/created',
      payload: newNota
    })
  }
}
//action init
//con redux-thunk convertimos en funcion nuestro objeto
export const actionInit = () => {
  return async dispatch => {
    const notes = await getNotes()
    dispatch({
      type: '@note/init',
      payload: notes
    })
  }
}
