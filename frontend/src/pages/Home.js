import { useEffect } from 'react'
import { usePDFContext } from '../hooks/usePDFContext'
import {useAuthContext} from '../hooks/useAuthContext'

import PdfDetails from '../components/pdfDetails'
import PdfForm from '../components/pdfForm'

const Home = () => {
  const { pdfs, dispatch } = usePDFContext() // Call usePDFContext as a function
  const {user} = useAuthContext()

  useEffect(() => {
    const fetchPDFs = async () => {
      const response = await fetch('/api/PDF' , {
        headers: {'Authorization': `Bearer ${user.token}`},
      })
      const json = await response.json()

      if (response.ok) {
        dispatch({ type: 'SET_PDFS', payload: json })
      }
    }

    if(user){
      fetchPDFs()
    }

    
  }, [dispatch, user])

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
