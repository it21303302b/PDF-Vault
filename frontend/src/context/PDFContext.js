import { createContext, useReducer } from 'react'

export const PDFContext = createContext()

export const pdfsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PDFS':
      return { 
        pdfs: action.payload 
      }
    case 'CREATE_PDF':
      return { 
        pdfs: [action.payload, ...state.pdfs] 
      }
    default:
      return state
  }
}

export const PdfsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(pdfsReducer, { 
    pdfs: []
  })
  
  return (
    <PDFContext.Provider value={{ ...state, dispatch }}>
      { children }
    </PDFContext.Provider>
  )
}
