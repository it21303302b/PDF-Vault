import { usePDFContext } from "../hooks/usePDFContext"

const PdfDetails = ({ pdf }) => {
  const { dispatch } = usePDFContext() // Call usePDFContext as a function

  const handleClick = async () => {
    const response = await fetch('/api/PDF/' + pdf._id, {
      method: 'DELETE'
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
      <p>{pdf.createdAt}</p>
      <span onClick={handleClick}>delete</span>
    </div>
  )
}

export default PdfDetails
