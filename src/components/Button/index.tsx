import { ButtonStyled } from "./styles";

interface ButtonProps {
  onClick: () => void;
  name: string;
}

export function Button({ name, onClick }: ButtonProps) {
  return (
    <ButtonStyled
      onClick={onClick}
    >
      {name}
    </ButtonStyled>
  )
}