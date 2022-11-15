import styled from 'styled-components'

export const Form = styled.div`
  width: 256px;
  max-width: 256px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`

export const OptionText = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #1d1d1b;
  display: flex;
  align-items: flex-start;
  gap: 12px;
`

export const Title = styled.h1`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
  margin-bottom: 32px;
`
export const Subtitle = styled.h2`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  margin-bottom: 27px;
`
