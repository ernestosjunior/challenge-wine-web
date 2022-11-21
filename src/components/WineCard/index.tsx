import * as S from './styles'
import Image from 'next/image'
import { formatPrice } from '../../utils/formatPrice'
import { useRouter } from 'next/router'

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

interface WineCardProps {
  wine: WineProps
  setWine: (state: WineProps) => void
}

export function WineCard({ wine, setWine }: WineCardProps) {
  const router = useRouter()
  if (!Object.keys(wine).length) return null

  const { id, image, name, price, discount, priceMember, priceNonMember } = wine

  const hasDiscount = discount > 0

  return (
    <S.Container>
      <S.Card
        onClick={() => {
          setWine(wine)
          router.push(`/vinhos/${id}`)
        }}
      >
        <Image
          width={198}
          height={178}
          src={image}
          alt={`Imagem do ${name}`}
          style={{ objectFit: 'contain' }}
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
