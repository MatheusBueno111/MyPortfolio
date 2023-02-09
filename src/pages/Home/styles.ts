import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Main = styled.div`
  display: flex;
  padding: 5rem;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  margin-top: 2rem;

  img {
    border: 2px solid ${({ theme }) => theme['grey-700']};
    padding: 0.25rem;
    border-radius: 999px;
    width: 20rem;
    height: 20rem;

    animation-name: image;
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
    @keyframes image {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 5rem;
    justify-content: space-evenly;
    padding: 3rem;
  }
`

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  animation-name: profile;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  @keyframes profile {
    from {
      transform: translateY(-100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  h1 {
    text-align: center;
    strong {
      font-size: 4rem;
    }
  }

  p {
    margin-top: 1rem;
    font-size: 1.25rem;
  }
`
