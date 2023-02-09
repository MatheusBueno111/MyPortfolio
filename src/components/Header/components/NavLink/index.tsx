import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

interface NavLinkProps {
  href: string
  name: string
}

const NavLink: React.FC<NavLinkProps> = ({ href, name }) => {
  const { asPath } = useRouter()
  const ariaCurrent = href === asPath ? 'page' : undefined

  return (
    <Link href={href} passHref legacyBehavior>
      <a aria-current={ariaCurrent}>{name}</a>
    </Link>
  )
}

export default NavLink
