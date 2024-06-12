import { useEffect, useState }from 'react'

import PdfDetails from '../components/pdfDetails'

const Home = () => {
    const [pdfs, serPDfs] = useState(null)

    useEffect(() => {
        const fetchPDFs = async () => {
          const response = await fetch('/api/PDF')
          const json = await response.json()
    
          if (response.ok) {
            serPDfs(json)
          }
        }
    
        fetchPDFs()
      }, [])
    
    return(
        <div className="Home">
            <div className='PDFs'>
                {pdfs && pdfs.map((pdf) =>(
                    <PdfDetails key={pdf._id} pdf={pdf}/>
                ))}
            </div>
        </div>
    )
}

export default Home