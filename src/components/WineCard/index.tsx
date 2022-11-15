import * as S from './styles'
import Image from 'next/image'
import { formatPrice } from '../../utils/formatPrice'

export type WineProps = {
  id: number
  image: string
  name: string
  price: number
  discount: number
  priceMember: number
  priceNonMember: number
  type: string
  classification: string
  size: string
  rating: number
  avaliations: number
  country: string
  region: string
  flag: string
  sommelierComment: string
}

export function WineCard(wine: WineProps) {
  if (!Object.keys(wine).length) return null

  const { image, name, price, discount, priceMember, priceNonMember } = wine

  const hasDiscount = discount > 0

  return (
    <S.Container>
      <S.Card>
        <Image
          width={198.57}
          height={178.13}
          src={image}
          alt={`Imagem do ${name}`}
        />
        <S.Name>{name}</S.Name>
        <S.ContainerValues>
          <S.OldValue>{formatPrice(String(price))}</S.OldValue>
          {hasDiscount && (
            <S.Discount>
              <p>{discount}% OFF</p>
            </S.Discount>
          )}
        </S.ContainerValues>
        <S.ContainerValues>
          <S.LabelMemberPrice>Sócio Wine</S.LabelMemberPrice>
          <S.MemberPrice>{formatPrice(String(priceMember))}</S.MemberPrice>
        </S.ContainerValues>
        <S.ContainerValues>
          <S.LabelNonMemberPrice>Não sócio</S.LabelNonMemberPrice>
          <S.NonMemberPrice>
            {formatPrice(String(priceNonMember))}
          </S.NonMemberPrice>
        </S.ContainerValues>
      </S.Card>
      <S.Button>Adicionar</S.Button>
    </S.Container>
  )
}
