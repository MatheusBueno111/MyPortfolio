import Link from 'next/link'

import { List, TerminalWindow, X } from 'phosphor-react'
import React, { useState } from 'react'
import NavLink from './components/NavLink'
import * as S from './styles'

const Header: React.FC = () => {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false)

  function handleNavBarState() {
    setIsNavBarOpen((value) => !value)
  }

  // const router = useRouter()
  // // console.log(router)

  return (
    <S.Wrapper state={isNavBarOpen}>
      <S.Logo>
        <Link href="/">
          <TerminalWindow size={64} />
        </Link>
      </S.Logo>

      <S.OpenButton state={isNavBarOpen} onClick={handleNavBarState}>
        <List size={48} weight="bold" />
      </S.OpenButton>

      <S.NavBar state={isNavBarOpen}>
        <S.CloseButton onClick={handleNavBarState}>
          <X size={48} weight="bold" />
        </S.CloseButton>
        <NavLink href="/" name="Home" />
        <NavLink href="/skills" name="Skills" />
        <NavLink href="/experience" name="Experiências" />
        <NavLink href="/contact" name="Contato" />
      </S.NavBar>
    </S.Wrapper>
  )
}

export default Header
