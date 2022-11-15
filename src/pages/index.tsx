import { BaseLayout } from '../templates'
import styled from 'styled-components'
import { WineCard, WineProps } from '../components'

interface HomeProps {
  wines: WineProps[]
}

export default function Home({ wines }: HomeProps) {
  return (
    <BaseLayout>
      <List>
        {wines.map((wine: WineProps) => (
          <WineCard key={String(wine.id)} {...wine} />
        ))}
      </List>
    </BaseLayout>
  )
}

const List = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-itens: center;
  gap: 32px;
`

export async function getServerSideProps() {
  const res = await fetch(
    'https://wine-back-test.herokuapp.com/products?page=1&limit=10'
  )
  const data = await res.json()

  return { props: { wines: data.items } }
}
