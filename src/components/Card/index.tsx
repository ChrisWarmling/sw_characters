import { StyledCard } from "./styles";

interface CardProps {
  title: string;
  width: number;
  height: number;
}

export function Card({ title, height, width } : CardProps) {
  return (
    <StyledCard
      height={height}
      width={width}
    >
      <h1>{title}</h1>
    </StyledCard>
  )
}