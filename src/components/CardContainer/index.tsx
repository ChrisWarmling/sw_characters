import { ReactElement } from "react";
import { StyledContainer } from "./styles";

interface CardContainerProps {
  children: ReactElement
}

export function CardContainer({ children }: CardContainerProps) {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  )
}