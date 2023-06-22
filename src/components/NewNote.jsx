import { useDispatch, useSelector } from 'react-redux'
import { actionCreated } from '../reducers/noteReducer'

export function NewNote() {
  // useSelector selecciona un estaod
  const state = useSelector(state => state.note)
  // console.log({ state }) arrelando error por combinar estado
  // useDispatch para mandar los datos al estado
  const dispatch = useDispatch()

  const addNote = async event => {
    event.preventDefault()
    const { target } = event
    const title = target.note.value

    //con redux-thunk solo disparamos los dispatch desde aqui
    dispatch(actionCreated(title))
    target.note.value = ''
  }

  return (
    <form onSubmit={addNote}>
      <input name='note' type='text' />
      <button>enviar</button>
    </form>
  )
}
