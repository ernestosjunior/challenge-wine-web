import React from 'react'
import { Header, Filter } from '../../components'
import * as S from './styles'
import { useRoot } from '../../hooks/useRoot'

export interface BaseLayoutProps {
  children?: React.ReactNode
  showFilter?: boolean
}

export function BaseLayout({ children, showFilter = false }: BaseLayoutProps) {
  const { filter, setFilter } = useRoot()
  console.log(filter)
  return (
    <>
      <Header itemsOnBox={0} />
      <S.Main>
        {showFilter && <Filter filter={filter} setFilter={setFilter} />}
        <S.Container>{children}</S.Container>
      </S.Main>
    </>
  )
}
