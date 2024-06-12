import { useEffect } from 'react'
import { usePDFContext } from '../hooks/usePDFContext'

import PdfDetails from '../components/pdfDetails'
import PdfForm from '../components/pdfForm'

const Home = () => {
  const { pdfs, dispatch } = usePDFContext() // Call usePDFContext as a function

  useEffect(() => {
    const fetchPDFs = async () => {
      const response = await fetch('/api/PDF')
      const json = await response.json()

      if (response.ok) {
        dispatch({ type: 'SET_PDFS', payload: json })
      }
    }

    fetchPDFs()
  }, [dispatch])

  return (
    <div className="home">
      <div className="pdfs">
        {pdfs && pdfs.map((pdf) => (
          <PdfDetails key={pdf._id} pdf={pdf} />
        ))}
      </div>
      <PdfForm />
    </div>
  )
}

export default Home
