import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 48px;

  > ul {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 8px;
    gap: 16px;
    align-items: center;
    color: #b6116e;
    font-weight: 700;
    font-size: 16px;
    line-height: 14px;

    li {
      cursor: pointer;
    }

    .button-page {
      a {
        border: 1px solid;
        padding: 10px 14px;
        border-radius: 3px;
      }
    }

    .button-page:nth-child(2n) {
      a {
        width: 73px;
      }
    }

    .button-page-active {
      a {
        background: #b6116e;
        color: #ffffff;
      }
    }
  }
`
