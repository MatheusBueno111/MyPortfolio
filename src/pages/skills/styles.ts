import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  justify-content: space-evenly;
  padding: 3rem;
  margin-top: 2.5rem;

  @media screen and (min-width: 768px) {
    display: grid;
    padding: 5rem;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  }
`

export const HardSkils = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  color: ${({ theme }) => theme.background};
  background-color: ${({ theme }) => theme['grey-900']};
  border-radius: 0.5rem;
  text-align: center;
  gap: 0.75rem;
  box-shadow: rgb(0, 0, 0, 50%) 0px 0px 6px;

  :hover {
    background-image: linear-gradient(
      to bottom right,
      var(--tw-gradient-stops)
    );
    --tw-gradient-from: rgb(232 121 249);
    --tw-gradient-to: rgb(232 121 249 / 10%);
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
    --tw-gradient-to: rgb(45 212 200);
    transform: scale(1.02);
  }

  animation-name: hardSkills;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  @keyframes hardSkills {
    from {
      transform: translateX(-100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`
