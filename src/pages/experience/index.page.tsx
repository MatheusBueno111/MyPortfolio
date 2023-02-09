import Footer from '@/components/Fotter'
import Header from '@/components/Header'
import Link from 'next/link'
import React from 'react'
import * as S from './styles'

// import { Container } from './styles';

const Experience: React.FC = () => {
  return (
    <S.Wrapper>
      <Header />

      <S.Main>
        <S.ContainerExperience>
          <h2>Coffee Delivery</h2>
          <p>
            Projeto eCommerce desenvolvido de encomenda de cafés. O usuário
            adiciona o seu pedido no carrinho e coloca seu endereço.
          </p>
          <S.ProjectLinks>
            <Link href="https://desafio-ignite-2.vercel.app/">Deploy</Link>
            <Link href="https://github.com/MatheusBueno111/desafio-ignite-2">
              Repostitório
            </Link>
          </S.ProjectLinks>
        </S.ContainerExperience>

        <S.ContainerExperience>
          <h2>Destino de interesse</h2>
          <p>
            Projeto desenvolvido para saber o destino de interesse do usuário,
            por meio de um formulário.
          </p>
          <S.ProjectLinks>
            <Link href="https://destino-de-interesse.vercel.app/">Deploy</Link>
            <Link href="https://github.com/MatheusBueno111/Desafio-Destino-de-interesse">
              Repostitório
            </Link>
          </S.ProjectLinks>
        </S.ContainerExperience>

        <S.ContainerExperience>
          <h2>toDoList</h2>
          <p>
            Projeto densevolvido para anotar os compromissos do dia-a-dia, CRUD.
            Meu primeiro projeto.
          </p>
          <S.ProjectLinks>
            <Link href="https://to-do-list-bice-delta-43.vercel.app/">
              Deploy
            </Link>
            <Link href="https://github.com/MatheusBueno111/desafio-react-01">
              Repostitório
            </Link>
          </S.ProjectLinks>
        </S.ContainerExperience>
      </S.Main>

      <Footer />
    </S.Wrapper>
  )
}

export default Experience
