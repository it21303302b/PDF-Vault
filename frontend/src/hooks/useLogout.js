import { useAuthContext } from './useAuthContext'
import { usePDFContext } from './usePDFContext'

export const useLogout = () => {
  const { dispatch } = useAuthContext()
  const { dispatch: dispatchPdfs } = usePDFContext()

  const logout = () => {
    // remove user from storage
    localStorage.removeItem('user')

    // dispatch logout action
    dispatch({ type: 'LOGOUT' })
    dispatchPdfs({ type: 'SET_PDFS', payload: null })
  }

  return { logout }
}