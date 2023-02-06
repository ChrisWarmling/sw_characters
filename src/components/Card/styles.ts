import styled from "styled-components";

interface StyledCardProps {
  width: number;
  height: number;
}

export const StyledCard = styled.article<StyledCardProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: ${({height}) => `${height}rem`};
  width: ${({width}) => `${width}rem`};

  background-color: var(--gray-800);
  border-radius: .5rem;

  cursor: pointer;
`