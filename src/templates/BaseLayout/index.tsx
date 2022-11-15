import React from 'react'
import { Header, Filter } from '../../components'
import * as S from './styles'

export interface BaseLayoutProps {
  children?: React.ReactNode
  showFilter?: boolean
}

export function BaseLayout({ children, showFilter = false }: BaseLayoutProps) {
  return (
    <>
      <Header itemsOnBox={0} />
      <S.Main>
        {showFilter && <Filter filter="" setFilter={() => {}} />}
        <S.Container>{children}</S.Container>
      </S.Main>
    </>
  )
}
