import styled from "styled-components";

export const StyledContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 4rem;

  width: 100vw;
  height: calc(100vh - 5rem);

  @media screen and (max-width: 430px) {
    flex-direction: column;
    height: fit-content;
    margin-top: 2rem;
  }
`