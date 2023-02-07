import styled from "styled-components";

export const ButtonStyled = styled.button`
  color: var(--gray-600);
  border: 1px solid var(--gray-600);
  background-color: inherit;
  border-radius: .5rem;
  font-weight: 800;
  
  height: 2rem;
  padding: 0 .5rem;

  &:hover {
    border: 1px solid var(--blue-light);
    box-shadow: var(--shadow-light);
    color: var(--white);
    text-shadow: var(--shadow-light);
  }
`