import { useState } from 'react'
import { usePDFContext } from '../hooks/usePDFContext'

const PDFForm = () => {
  const { dispatch } = usePDFContext()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields,setEmptyfields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const pdf = {title, description}
    
    const response = await fetch('/api/PDF', {
        method: 'POST',
        body: JSON.stringify(pdf),
        headers: {
          'Content-Type': 'application/json'
        }
      })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyfields(json.emptyFields)
    }
    if (response.ok) {
        setError(null)
        setTitle('')
        setDescription('')
        setEmptyfields([])
        console.log('new PDF added:', json)
      dispatch({type: 'CREATE_PDF', payload: json})
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New PDF</h3>

      <label>PDF Title:</label>
      <input 
        type="text" 
        onChange={(e) => setTitle(e.target.value)} 
        value={title}
        className={emptyFields.includes('title') ? 'error' : ''}
      />

      <label>Description (in kg):</label>
      <input 
        type="text" 
        onChange={(e) => setDescription(e.target.value)} 
        value={description}
        className={emptyFields.includes('description') ? 'error' : ''}
      />

      <button>Add PDF</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default PDFForm