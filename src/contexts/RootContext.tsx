import { useRouter } from 'next/router'
import { createContext, ReactNode, useEffect, useState } from 'react'

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
  const router = useRouter()

  useEffect(() => {
    router.push({
      pathname: '/',
      query: { ...router.query, filter: filter },
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter])

  return (
    <RootContext.Provider value={{ filter, setFilter }}>
      {children}
    </RootContext.Provider>
  )
}
