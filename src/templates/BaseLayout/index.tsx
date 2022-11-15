import React from 'react'
import { Header } from '../../components'
import * as S from './styles'

export interface BaseLayoutProps {
  children?: React.ReactNode
}

export function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <>
      <Header itemsOnBox={0} />
      <S.Container>{children}</S.Container>
    </>
  )
}
