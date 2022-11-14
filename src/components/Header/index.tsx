import { useRouter } from 'next/router'
import Image from 'next/image'
import logo from '../../assets/logo-black.svg'
import search from '../../assets/search-icon.svg'
import acount from '../../assets/acount-icon.svg'
import wineBox from '../../assets/wineBox.svg'
import * as S from './styles'

export interface HeaderProps {
  itemsOnBox?: number
}

export function Header({ itemsOnBox = 0 }: HeaderProps) {
  const router = useRouter()

  return (
    <S.Header headerHeight={88}>
      <S.Left>
        {' '}
        <Image src={logo} alt="Logo Wine" />
        <S.ContainerOptions>
          {headerOptions.map(({ label, path }) => (
            <S.RedirectButton
              onClick={(e) => {
                e.preventDefault()
                router.push(path)
              }}
              key={label}
            >
              {label}
            </S.RedirectButton>
          ))}
        </S.ContainerOptions>
      </S.Left>
      <S.IconsSection>
        <Image src={search} alt="Botão de busca" />
        <Image src={acount} alt="Botão para a conta" />
        <S.WineBox>
          <Image src={wineBox} alt="Botão para Wine box" />
          <S.WineBoxCount>
            <p>{itemsOnBox}</p>
          </S.WineBoxCount>
        </S.WineBox>
      </S.IconsSection>
    </S.Header>
  )
}

const headerOptions = [
  { label: 'Clube', path: 'clube' },
  { label: 'Loja', path: 'loja' },
  { label: 'Produtores', path: 'produtores' },
  { label: 'Ofertas', path: 'ofertas' },
  { label: 'Eventos', path: 'eventos' },
]