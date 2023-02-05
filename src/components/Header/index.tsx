import { ContentHeader, StyledHeader } from "./styles";

export function Header() {
  return (
    <StyledHeader>
      <ContentHeader active>Characters</ContentHeader>
      <img src="/images/logo.svg" alt="" />
      <ContentHeader>Films</ContentHeader>
    </StyledHeader>
  )
}