import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${(props: { headerHeight: number }) => props.headerHeight}px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 0px 150px;
`
export const WineBox = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
  filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.35));
  width: 57px;
  height: 57px;
`
export const WineBoxCount = styled.span`
  position: absolute;
  background: #ffffff;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  bottom: -1px;
  left: 36px;
  filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.35));

  p {
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #4fbfa5;
  }
`
export const IconsSection = styled.div`
  display: flex;
  align-items: center;
  gap: 45px;

  img {
    cursor: pointer;
  }
`
export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 82px;
`

export const ContainerOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 48px;
`
export const RedirectButton = styled.button`
  all: unset;
  color: #555555;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  cursor: pointer;
`