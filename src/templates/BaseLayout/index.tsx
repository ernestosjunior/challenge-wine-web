import React, { useEffect } from 'react'
import { Header, Filter } from '../../components'
import * as S from './styles'
import { useRoot } from '../../hooks/useRoot'
import { useRouter } from 'next/router'

export interface BaseLayoutProps {
  children?: React.ReactNode
  showFilter?: boolean
}

export function BaseLayout({ children, showFilter = false }: BaseLayoutProps) {
  const { filter, setFilter } = useRoot()
  const router = useRouter()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [router.asPath])

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
