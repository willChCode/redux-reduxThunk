import { useSelector } from 'react-redux'

function Note({ note }) {
  return (
    <li>
      <strong>{note.title}</strong>
      <p>{note.content}</p>
    </li>
  )
}

export function Notes() {
  // useSelector selecciona un estaod
  const notes = useSelector(state => state.note)
  // console.log({ notes }) //ver todos los estado y arreglar errores
  return (
    <ul>
      {notes.map(note => {
        return <Note key={note.id} note={note} />
      })}
    </ul>
  )
}
