import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Card = styled.article`
  width: 256px;
  height: auto;
  background: #ffffff;
  box-shadow: 0px 9.73384px 14.6008px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 9px 28px 21px 28px;
`

export const Name = styled.h1`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: -0.222488px;
  color: #1d1d1b;
  margin-top: 7px;
`

export const ContainerValues = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-top: 6px;
`

export const OldValue = styled.p`
  font-weight: 700;
  font-size: 11px;
  line-height: 16px;
  text-align: center;
  text-decoration-line: line-through;
  color: #888888;
`

export const Discount = styled.div`
  background: #f79552;
  border-radius: 1.94677px;
  color: #ffffff;
  font-weight: 700;
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
`
export const MemberPrice = styled.p`
  font-weight: 700;
  font-size: 11px;
  color: #b6116e;
  margin-top: 16px;
`
export const LabelMemberPrice = styled.p`
  font-weight: 700;
  font-size: 11px;
  text-align: right;
  text-transform: uppercase;
  color: #1d1d1b;
  margin-top: 16px;
`

export const NonMemberPrice = styled.p`
  font-weight: 700;
  font-size: 12px;
  color: #888888;
  margin-top: 9px;
`
export const LabelNonMemberPrice = styled.p`
  font-weight: 700;
  font-size: 12px;
  text-align: right;
  text-transform: uppercase;
  color: #888888;
  margin-top: 9px;
`
export const Button = styled.button`
  all: unset;
  background: #7ebc43;
  box-shadow: 0px 0.973384px 1.94677px rgba(0, 0, 0, 0.2);
  border-radius: 3.89354px;
  width: 256px;
  height: 40px;
  text-align: center;
  color: #ffffff;
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
`
