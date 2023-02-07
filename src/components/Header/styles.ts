import styled from "styled-components";

interface ContentHeaderProps {
  active?: boolean
}

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    width: 100vw;
    height: 5rem;

    padding: .75rem;

    div {
      display: flex;
      width: 100%;

      &.left {
        justify-content: flex-end;
      }
    }
`

export const ContentHeader = styled.a<ContentHeaderProps>`
  display: inline-block;
  position: relative;
  padding: 0 0.5rem;
  line-height: 2rem;
  color: ${({active}) => active ? 'var(--white)' : 'var(--gray-300)'};
  font-weight: ${({active}) => active ? 'bold' : 'normal'};

  transition: color 0.2s;

  &:hover {
    color: var(--white);
  }

  ${({active}) => active && `
    &::after {
      content: '';
      height: 2px;
      border-radius: 3px 3px 0 0; 
      width: 100%;
      position: absolute;
      bottom: 1px;
      left: 0;
      background: var(--white);
      border: 1px solid var(--blue-light);
      box-shadow: var(--shadow-light);
    }
  `}
`