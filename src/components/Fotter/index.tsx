import Image from 'next/image'
import Link from 'next/link'
import { Envelope, LinkedinLogo, WhatsappLogo } from 'phosphor-react'
import React from 'react'
import * as S from './styles'

// import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Contact>
        <Link href={'https://www.linkedin.com/in/matheus-bueno-queiroz/'}>
          <LinkedinLogo size={32} />
        </Link>

        <Link href={'https://github.com/MatheusBueno111'}>
          <Image
            src="./github-mark.svg"
            alt="github logo"
            width={200}
            height={200}
            quality={100}
          />
        </Link>

        <Link href={'https://wa.me/5512988046428'}>
          <WhatsappLogo size={32} />
        </Link>

        <Link href={'mailto:matheus.bueno.queiroz@gmail.com.br'}>
          <Envelope size={32} />
        </Link>
      </S.Contact>

      <span>&copy; Matheus Bueno, 2023</span>
    </S.Wrapper>
  )
}

export default Footer
