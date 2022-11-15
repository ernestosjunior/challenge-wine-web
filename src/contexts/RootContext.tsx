import { createContext, ReactNode, useState } from 'react'

export interface RootContextProps {
  filter: string
  setFilter: (state: string) => void
}

export const RootContext = createContext({} as RootContextProps)

interface RootProviderProps {
  children: ReactNode
}

export function RootProvider({ children }: RootProviderProps) {
  const [filter, setFilter] = useState('')

  return (
    <RootContext.Provider value={{ filter, setFilter }}>
      {children}
    </RootContext.Provider>
  )
}
