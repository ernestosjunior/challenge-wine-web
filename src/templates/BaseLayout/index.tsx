import React from 'react'
import { Header } from '../../components'

export interface BaseLayoutProps {
  children?: React.ReactNode
}

export function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <>
      <Header itemsOnBox={0} />
      {children}
    </>
  )
}
