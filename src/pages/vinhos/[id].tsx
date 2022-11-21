import { BaseLayout } from '../../templates'
import { useRouter } from 'next/router'
import { useRoot } from '../../hooks/useRoot'
import Image from 'next/image'
import backButton from '../../assets/back-button.svg'
import styled from 'styled-components'

export default function Wines() {
  const router = useRouter()
  const { wine } = useRoot()

  return (
    <BaseLayout>
      <Container>
        <Left>
          <Image
            src={backButton}
            alt="Botão para retornar a página anterior"
            className="back-icon"
            onClick={() => router.push('/')}
          />
          <Image
            width={381}
            height={579}
            src={wine?.image!}
            alt={`Imagem do ${wine?.name}`}
            style={{ objectFit: 'contain' }}
          />
        </Left>
        <Right>
          <h1>{wine?.name}</h1>
        </Right>
      </Container>
    </BaseLayout>
  )
}

const Container = styled.div`
  display: flex;
`

const Left = styled.section`
  .back-icon {
    cursor: pointer;
    align-self: flex-start;
  }
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
`
const Right = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
`
