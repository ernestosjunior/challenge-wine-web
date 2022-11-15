import { useContext } from 'react'
import { RootContext, RootContextProps } from '../contexts/RootContext'

export function useRoot(): RootContextProps {
  const root = useContext(RootContext)
  return root
}
