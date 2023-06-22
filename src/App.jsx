import { Notes } from './components/Note'
import { NewNote } from './components/NewNote'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { actionInit } from './reducers/noteReducer'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actionInit())
  }, [dispatch])

  const filterSelected = value => {
    console.log(value)
  }

  return (
    <div>
      <h2>NOTAS</h2>
      <NewNote />
      <div>
        all
        <input
          type='radio'
          name='filter'
          onChange={() => filterSelected('all')}
        />
        title
        <input
          type='radio'
          name='filter'
          onChange={() => filterSelected('title')}
        />
      </div>
      <Notes />
    </div>
  )
}

export default App
