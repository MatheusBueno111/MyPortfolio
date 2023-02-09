import styled from 'styled-components'

export const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme['grey-900']};
  padding: 4rem;
  height: fit-content;

  justify-content: space-between;

  img {
    height: 2rem;
    width: 2rem;
  }

  a {
    all: unset;
    cursor: pointer;
  }

  span {
    margin-top: 1rem;
    color: ${({ theme }) => theme['grey-500']};
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    span {
      text-align: center;
    }
  }
`

export const Contact = styled.div`
  display: flex;

  gap: 1rem;
  align-items: center;
  justify-content: center;

  span {
    line-height: 1.5;
    align-items: center;
    justify-content: center;
  }
`
