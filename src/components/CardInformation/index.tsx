import { ReactNode } from "react";
import { Button } from "../Button";
import { StyledCardInformation } from "./style";

interface CardInformationProps {
  title: string;
  nameButton: string;
  onClickButton: () => void;
  children: ReactNode;
}

export function CardInformation({ title, nameButton, onClickButton, children }: CardInformationProps) {
  return (
    <StyledCardInformation >
      <header>
      <h1>{title}</h1>
      <Button name={nameButton} onClick={onClickButton}/>
      </header>
      {children}
    </StyledCardInformation>
  )
}