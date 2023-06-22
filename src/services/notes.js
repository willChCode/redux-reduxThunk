import axios from 'axios'

const baseUrl = 'http://localhost:3001/notes'

const getNotes = async () => {
  const { data } = await axios.get(baseUrl)
  return data
}

const createNew = async title => {
  const note = {
    title,
    content: 'nueva nota de backend'
  }
  const { data } = await axios.post(baseUrl, note)
  return data
}

export { getNotes, createNew }
