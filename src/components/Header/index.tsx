import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ContentHeader, StyledHeader } from "./styles";

export function Header() {
  const location = useLocation()

  const [isHomePage, setIsHomePage] = useState<boolean>(false)

  useEffect(() => {
    setIsHomePage(location.pathname === '/')
  }, [location.pathname])

  return (
    <StyledHeader>
      <div className="left">
      {!isHomePage && <ContentHeader active={location.pathname === '/character'}>Characters</ContentHeader>}
      </div>
      <Link to='/'>
        <img src="/images/logo.svg" alt="logo star wars" height='54' />
      </Link>
      <div>
      {!isHomePage && <ContentHeader>Films</ContentHeader>}
      </div>
    </StyledHeader>
  )
}