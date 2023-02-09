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
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
  }
`

export const ContainerExperience = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  color: ${({ theme }) => theme.background};
  background-color: ${({ theme }) => theme['grey-900']};
  border-radius: 0.5rem;
  text-align: center;
  gap: 0.75rem;
  box-shadow: rgb(0, 0, 0, 50%) 0px 3px 8px;
  font-weight: 700;
  h2 {
    margin-top: 0.5rem;
    font-size: 2rem;
  }

  p {
    text-align: justify;
    color: ${({ theme }) => theme['grey-100']};
    margin-top: 0.5rem;
  }

  :hover {
    background-image: linear-gradient(
      to bottom right,
      var(--tw-gradient-stops)
    );
    --tw-gradient-from: rgb(45 185 250);
    --tw-gradient-to: rgb(232 121 249 / 10%);
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
    --tw-gradient-to: rgb(22 121 249);
    transform: scale(1.02);
  }
`

export const ProjectLinks = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  a {
    all: unset;

    font-size: 1rem;
    cursor: pointer;
  }
`
