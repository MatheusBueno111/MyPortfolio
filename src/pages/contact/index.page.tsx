import Header from '@/components/Header'
import Image from 'next/image'

import { Envelope, LinkedinLogo, WhatsappLogo } from 'phosphor-react'
import React from 'react'
import * as S from './styles'
// import { Container } from './styles';

const Contact: React.FC = () => {
  const variantColors = {
    blue: '#2B66C2',
    green: '#46C200',
    primary: '#000000',
  }

  console.log(variantColors.blue)

  return (
    <S.Wrapper>
      <Header />
      <S.Main>
        <h1>VAMOS CONSTRUIR ALGO JUNTOS!</h1>

        <S.ContactsContainer>
          <S.ContactLink
            href={'https://www.linkedin.com/in/matheus-bueno-queiroz/'}
            variant="blue"
          >
            <LinkedinLogo size={128} weight="fill" color="white" />
          </S.ContactLink>

          <S.ContactLink
            href={'https://github.com/MatheusBueno111'}
            variant="primary"
          >
            <Image
              src="./github-mark-white.svg"
              alt="github logo"
              width={128}
              height={128}
              quality={100}
            />
          </S.ContactLink>

          <S.ContactLink href={'https://wa.me/5512988046428'} variant="green">
            <WhatsappLogo size={128} weight="fill" color="white" />
          </S.ContactLink>

          <S.ContactLink
            href="mailto:matheus.bueno.queiroz@gmail.com.br"
            variant="red"
          >
            <Envelope size={128} weight="regular" color="white" />
          </S.ContactLink>
        </S.ContactsContainer>
      </S.Main>
    </S.Wrapper>
  )
}

export default Contact
