import { BaseLayout } from '../templates'
import styled from 'styled-components'
import { WineCard, WineProps } from '../components'
import useDeviceSize from '../hooks/useDeviceSize'
import { useRoot } from '../hooks/useRoot'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { api } from '../lib/api'

interface HomeProps {
  wines: WineProps[]
  totalItems: number
}

export default function Home({ wines, totalItems }: HomeProps) {
  const [width] = useDeviceSize()
  const { filter } = useRoot()
  const router = useRouter()

  const isDesktop = Boolean(width && width >= 1200)
  const isMobile = Boolean(width && width <= 480)

  useEffect(() => {
    router.replace(router.asPath)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter])

  return (
    <BaseLayout showFilter={isDesktop}>
      <Main>
        <h1>
          <strong>{totalItems}</strong> produtos encontrados
        </h1>
        <List isMobile={isMobile}>
          {wines.map((wine: WineProps) => (
            <WineCard key={String(wine.id)} {...wine} />
          ))}
        </List>
      </Main>
    </BaseLayout>
  )
}

export async function getServerSideProps() {
  const { data } = await api.get('/products')

  return { props: { wines: data.items, totalItems: data.totalItems } }
}

const Main = styled.main`
  > h1 {
    margin-bottom: 32px;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #262626;
  }
  strong {
    font-weight: 700;
  }
`
const List = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${(props: { isMobile: boolean }) =>
    props.isMobile ? 'center' : 'stretch'};
  align-itens: center;
  gap: 32px;
  flex: 1;
`
