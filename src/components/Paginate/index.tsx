import ReactPaginate from 'react-paginate'
import * as S from './styles'

interface PaginateProps {
  handlePageClick: (e: any) => void
  pageCount: number
  pageRangeDisplayed: number
}

export function Paginate({
  handlePageClick,
  pageCount,
  pageRangeDisplayed,
}: PaginateProps) {
  return (
    <S.Container>
      <ReactPaginate
        breakLabel="..."
        nextLabel="Próximo >>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={pageRangeDisplayed}
        pageCount={pageCount}
        previousLabel="<< Anterior"
        pageClassName="button-page"
        activeClassName="button-page-active"
      />
    </S.Container>
  )
}
