import styled from "styled-components";

export const StyledCardInformation = styled.article`
  display: flex;
  flex-direction: column;

  /* height: 25rem; */
  width: 50rem;

  @media screen and (max-width: 430px) {
    width: fit-content;
  }

  padding: 2rem;

  background-color: var(--gray-800);
  border-radius: .5rem;

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media screen and (max-width: 430px) {
    flex-direction: column;
    justify-content: none;
    gap: 1rem;
    margin-bottom: 1rem;
  }

    h1 {
    font-size: 2rem;
    font-weight: 900;
    margin-bottom: 2rem;
    /* font-family: 'Star Wars'; */
    @media screen and (max-width: 430px) {
    margin-bottom: 0;
  }
  }
  }
`

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;

  @media screen and (max-width: 430px) {
    flex-direction: column;
  }

  article {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 50%;
    max-height: 20rem;

    @media screen and (max-width: 430px) {
    width: 100%;
    max-height: none;

    & + article {
      margin-top: 2rem;
    }
  }

    position: relative;

    ul {
      overflow: auto;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      li {
        font-size: 1.25rem;
        color: var(--gray-300);
        
        strong {
          font-weight: 900;
          color: var(--white);
        }
      }
    }
  }
`