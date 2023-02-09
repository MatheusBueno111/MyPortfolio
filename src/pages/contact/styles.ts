import Link from 'next/link'
import styled from 'styled-components'

const variantColors = {
  blue: '#2B66C2',
  green: '#46C200',
  red: '#E80303',
  primary: '#151A21',
}

interface ContactLinkProps {
  variant: 'primary' | 'green' | 'blue' | 'red'
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  margin-top: 3rem;
  align-items: center;
  h1 {
    font-size: 4rem;
    text-align: center;
  }
`

export const ContactsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  grid-gap: 2rem;
  margin-top: 3rem;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`

export const ContactLink = styled(Link)<ContactLinkProps>`
  display: flex;

  padding: 1.3rem;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme['grey-900']};
  box-shadow: rgb(0, 0, 0, 40%) 3px 7px 9px;

  :hover {
    background-color: ${({ variant }) => variantColors[variant]};
  }

  transition: all 0.3s;
`
