import styled from "styled-components";

export const SearchSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 30rem;
  width: 20rem;
  overflow: hidden;

  padding: 1rem;

  input {
    height: 2rem;
    padding: 0.5rem;
    border-radius: .5rem;
    border: none;

    color: var(--gray-100);

    background: url(images/search.svg) no-repeat right;
    background-size: 1.25rem;

    &:hover {
      box-shadow: var(--shadow-light);
    }
    
    &::placeholder {
      color: var(--gray--300)
    }
  }
`

export const List = styled.ul`
  overflow: auto;
  height: inherit;

  li {
    padding: .5rem;
    font-weight: 700;

    border-radius: .5rem;

    cursor: pointer;
    
    &:hover{
      background-color: var(--gray-900);
    }
  }
`

export const AreaButton = styled.footer`
  display: flex;
  justify-content: center;

  margin-top: 1rem;

  position: relative;
`