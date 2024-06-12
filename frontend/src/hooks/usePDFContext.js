import { PDFContext } from "../context/PDFContext"
import { useContext } from "react"

export const usePDFContext = () => {
  const context = useContext(PDFContext)

  if(!context) {
    throw Error('usePDFContext must be used inside an PDFContextProvider')
  }

  return context
}