import styled from "styled-components";

export const ErrorMessage = styled.section`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;

  img {
    height: 20rem;
  };

  aside {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 5rem;
    h1 {
      font-size: 3rem;
    }
  }
`