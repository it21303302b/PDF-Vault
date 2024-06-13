import { usePDFContext } from "../hooks/usePDFContext"
import { useAuthContext } from '../hooks/useAuthContext'

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const PdfDetails = ({ pdf }) => {
  const { dispatch } = usePDFContext() // Call usePDFContext as a function
  const {user} = useAuthContext()

  const handleClick = async () => {

    if (!user) {
      return
    }

    const response = await fetch('/api/PDF/' + pdf._id, {
      method: 'DELETE',
      headers:{
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({ type: 'DELETE_PDF', payload: json })
    }
  }

  return (
    <div className="pdf-details">
      <h4>{pdf.title}</h4>
      <p>{pdf.description}</p>
      <p>{formatDistanceToNow(new Date(pdf.createdAt), { addSuffix: true })}</p>
      <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
    </div>
  )
}

export default PdfDetails
