import { StyledCard } from "./styles";

interface CardProps {
  title: string;
  width: number;
  height: number;
  onClick?: () => void
}

export function Card({ title, height, width, onClick } : CardProps) {
  return (
    <StyledCard
      height={height}
      width={width}
      onClick={onClick}
    >
      <h1>{title}</h1>
    </StyledCard>
  )
}