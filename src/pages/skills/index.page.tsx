import Footer from '@/components/Fotter'
import Header from '@/components/Header'
import { Browsers, HardDrives } from 'phosphor-react'
import React from 'react'
import * as S from './styles'

// import { Container } from './styles';

const Skills: React.FC = () => {
  return (
    <S.Wrapper>
      <Header />

      <S.Main>
        <S.HardSkils>
          <div>
            <Browsers size={32} />
          </div>
          <h2>Front-End</h2>
          <span>ReactJS, NextJS</span>
        </S.HardSkils>
        <S.HardSkils>
          <div>
            <HardDrives size={32} />
          </div>
          <h2>Linguagens</h2>
          <span>Javascript, Typescript, HTML, CSS</span>
        </S.HardSkils>
        <S.HardSkils>
          <div>
            <Browsers size={32} />
          </div>
          <h2>Back-End</h2>
          <span>NodeJS</span>
        </S.HardSkils>
        <S.HardSkils>
          <div>
            <Browsers size={32} />
          </div>
          <h2>Idiomas</h2>
          <span>Inglês - avançado</span>
        </S.HardSkils>
      </S.Main>

      <Footer />
    </S.Wrapper>
  )
}

export default Skills
