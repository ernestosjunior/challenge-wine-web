import { BaseLayout } from '../templates'
import styled from 'styled-components'
import { WineCard, WineProps } from '../components'
import useDeviceSize from '../hooks/useDeviceSize'

interface HomeProps {
  wines: WineProps[]
  totalItems: number
}

export default function Home({ wines, totalItems }: HomeProps) {
  const [width] = useDeviceSize()

  const isDesktop = Boolean(width && width >= 1200)

  return (
    <BaseLayout showFilter={isDesktop}>
      <Main>
        <h1>
          <strong>{totalItems}</strong> produtos encontrados
        </h1>
        <List>
          {wines.map((wine: WineProps) => (
            <WineCard key={String(wine.id)} {...wine} />
          ))}
        </List>
      </Main>
    </BaseLayout>
  )
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
  justify-content: stretch;
  align-itens: center;
  gap: 32px;
  flex: 1;
`

export async function getServerSideProps() {
  const res = await fetch(
    'https://wine-back-test.herokuapp.com/products?page=1'
  )
  const data = await res.json()

  return { props: { wines: data.items, totalItems: data.totalItems } }
}
