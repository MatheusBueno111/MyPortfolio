import styled from 'styled-components'

interface NavBarProps {
  state: boolean
}

export const Wrapper = styled.div<NavBarProps>`
  position: ${(props) => (props.state === true ? 'fixed' : 'absolute')};
  z-index: 1;
  display: flex;
  flex: 1;
  width: 100%;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: ${(props) => (props.state === true ? '100%' : 'unset')};
  background-color: ${({ theme }) => theme.background};

  @media screen and (min-width: 768px) {
    position: unset;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 3rem;
    height: auto;
  }
`
export const Logo = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    color: ${({ theme }) => theme['grey-900']};
    a {
      color: ${({ theme }) => theme['grey-900']};
      :link {
        text-decoration: none;
      }

      :visited {
        text-decoration: none;
      }

      :active {
        text-decoration: none;
      }
    }
  }
`

export const NavBar = styled.nav<NavBarProps>`
  display: ${(props) => (props.state === true ? 'flex' : 'none')};
  padding: 2rem;
  flex-direction: column;
  gap: 2rem;
  align-items: center;

  color: ${({ theme }) => theme['grey-900']};

  a {
    font-size: 2.5rem;
    color: inherit;

    :link {
      text-decoration: none;
    }

    :visited {
      text-decoration: none;
    }

    :active {
      text-decoration: none;
    }
    position: relative;

    &[aria-current] {
      :before {
        position: absolute;
        top: 3rem;
        content: '';
        width: 100%;
        height: 2px;
        background-color: ${({ theme }) => theme['grey-900']};
      }
    }
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: unset;

    a {
      font-size: 1.5rem;
      :hover {
        color: ${({ theme }) => theme['grey-900']};

        ::before {
          width: 100%;
        }
      }

      :before {
        position: absolute;
        top: 2rem;
        content: '';
        width: 0px;
        height: 2px;
        background-color: ${({ theme }) => theme['grey-900']};
        transition: width 0.3s;
      }

      &[aria-current] {
        :before {
          position: absolute;
          top: 2rem;
          content: '';
          width: 100%;
          height: 2px;
          background-color: ${({ theme }) => theme['grey-900']};
        }
      }
    }
  }
`

export const OpenButton = styled.div<NavBarProps>`
  display: ${(props) => (props.state === true ? 'none' : '')};
  position: absolute;
  top: 1rem;
  right: 1rem;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const CloseButton = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
