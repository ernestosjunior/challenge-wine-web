import { useRouter, Router } from 'next/router'
import { WineProps } from '../components'
import { createContext, ReactNode, useEffect, useState } from 'react'

export interface RootContextProps {
  filter: string
  setFilter: (state: string) => void
  wine: WineProps | null
  setWine: (state: WineProps) => void
}

export const RootContext = createContext({} as RootContextProps)

interface RootProviderProps {
  children: ReactNode
}

export function RootProvider({ children }: RootProviderProps) {
  const [wine, setWine] = useState<WineProps | null>(null)
  const [filter, setFilter] = useState('')
  const router = useRouter()

  useEffect(() => {
    if (filter) {
      router.push({
        pathname: '/',
        query: {
          ...router.query,
          page: router.query.filter === filter ? router.query.page : '1',
          filter,
        },
      })
      setFilter(String(router.query.filter))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter])

  return (
    <RootContext.Provider value={{ filter, setFilter, wine, setWine }}>
      {children}
    </RootContext.Provider>
  )
}
