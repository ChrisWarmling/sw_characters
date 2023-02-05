import { ReactNode } from "react";
import { StyledCardInformation } from "./style";

interface CardInformationProps {
  title: string;
  children: ReactNode
}

export function CardInformation({ title, children }: CardInformationProps) {
  return (
    <StyledCardInformation >
      <h1>{title}</h1>
      {children}
    </StyledCardInformation>
  )
}