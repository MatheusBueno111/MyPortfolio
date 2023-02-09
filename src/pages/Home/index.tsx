import Footer from '@/components/Fotter'
import Header from '@/components/Header'
import Image from 'next/image'
import React from 'react'
import * as S from './styles'

const Home: React.FC = () => {
  return (
    <S.Wrapper>
      <Header />
      <S.Main>
        <S.Profile>
          <h1>
            Olá, eu sou <strong>Matheus Bueno </strong>
          </h1>
          <p>Desenvolvedor Front-End Júnior</p>
        </S.Profile>
        <Image
          src="/matheusBueno.jpeg"
          alt="Foto do Matheus Bueno quem desenvolveu esse projeto"
          width={400}
          height={400}
          quality={100}
        />
      </S.Main>

      <Footer />
    </S.Wrapper>
  )
}

export default Home
