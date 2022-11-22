import { BaseLayout } from '../templates'
import { NextPageContext } from 'next'
import styled from 'styled-components'
import { WineCard, WineProps, Paginate } from '../components'
import useDeviceSize from '../hooks/useDeviceSize'
import { useRouter } from 'next/router'
import { api } from '../lib/api'
import { useRoot } from '../hooks/useRoot'

interface HomeProps {
  wines: WineProps[]
  totalItems: number
  totalPages: number
}

export default function Home({ wines, totalItems, totalPages }: HomeProps) {
  const [width] = useDeviceSize()
  const router = useRouter()
  const { setWine } = useRoot()

  const isDesktop = Boolean(width && width >= 1200)
  const isMobile = Boolean(width && width <= 1199)

  function handlePageClick(e: any) {
    router.push({
      pathname: '/',
      query: { ...router.query, page: String(e.selected + 1) },
    })
  }

  return (
    <BaseLayout showFilter={isDesktop}>
      <Main>
        {!wines.length ? (
          <h2>Nenhum produto encontrado! ;(</h2>
        ) : (
          <>
            <h1>
              <strong>{totalItems}</strong> produtos encontrados
            </h1>
            <List isMobile={isMobile}>
              {wines.map((wine: WineProps) => (
                <WineCard key={String(wine.id)} wine={wine} setWine={setWine} />
              ))}
            </List>
            <Paginate
              handlePageClick={handlePageClick}
              pageCount={totalPages}
              pageRangeDisplayed={3}
            />
          </>
        )}
      </Main>
    </BaseLayout>
  )
}

export async function getServerSideProps(context: NextPageContext) {
  if (!context.query.page) context.query.page = '1'
  if (!context.query.limit) context.query.limit = '10'

  const query = context.query.filter
    ? `/products?page=${context.query.page}&limit=${context.query.limit}&filter=${context.query.filter}`
    : `/products?page=${context.query.page}&limit=${context.query.limit}`

  const { data } = await api.get(query)

  return {
    props: {
      wines: data.items,
      totalItems: data.totalItems,
      totalPages: data.totalPages,
    },
  }
}

const Main = styled.main`
  > h1,
  h2 {
    margin-bottom: 32px;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #262626;
  }
  > h2 {
    text-align: center;
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
