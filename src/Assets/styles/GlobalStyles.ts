import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

body {
  background-color: #F3F4F6;
}

a {
  text-decoration: none;
}
`;

export default GlobalStyles;
