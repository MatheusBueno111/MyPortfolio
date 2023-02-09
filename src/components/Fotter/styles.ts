import styled from 'styled-components'

export const Wrapper = styled.footer`
  display: flex;
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
    color: ${({ theme }) => theme['grey-500']};
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
