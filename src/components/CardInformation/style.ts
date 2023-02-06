import styled from "styled-components";

export const StyledCardInformation = styled.article`
  display: flex;
  flex-direction: column;

  /* height: 25rem; */
  width: 50rem;

  padding: 2rem;

  background-color: var(--gray-800);
  border-radius: .5rem;

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    h1 {
    font-size: 2rem;
    font-weight: 900;
    margin-bottom: 2rem;
    /* font-family: 'Star Wars'; */
  }
  }
`

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 50%;
    max-height: 20rem;

    section {
      overflow: auto;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
  }
`