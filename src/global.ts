import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root{
  --white: #FFFFFF;
  --black: #000000;

  --gray-100: #e1e1e6;
  --gray-300: #B5B7B7;
  --gray-600: #788596;
  --gray-800: #1D1E1F;
  --gray-900: #0A0B0B;

  --yellow: #ffe81f;
  --blue-light: #12FAFF;

  --shadow-light: 1px 1px 8px rgba(18, 250, 255, 0.7);
}

@media(max-width: 1080px) {
  html{
    font-size: 93.75%;
  }
}

@media(max-width: 720px) {
  html{
    font-size: 87.5%;
  }
}

body{
  background: var(--gray-900);
  color: var(--white);
}

body, input, select, textarea, button{
  font: 500 1rem "Gothic A1", sans-serif;
}

button{
  cursor: pointer;
}

a{
  color: inherit;
  text-decoration: none;
}

::-webkit-scrollbar {
  width: .5rem;
}

::-webkit-scrollbar-track {
  background: #B5B7B7; 
  border-radius: .25rem;
}
 
::-webkit-scrollbar-thumb {
  background: #0A0B0B; 
}

::-webkit-scrollbar-thumb:hover {
  background: #000000; 
}
`;

export default GlobalStyle;