import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import 'react-perfect-scrollbar/dist/css/styles.css';

// CUSTOM IMPORTS
import { fonts, colors } from '~/styles';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap');

  /* RESET ALL DEFAULT CSS STYLE */
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
    background: none;
    background-size: cover;
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    font: ${fonts.regular} 'Ubuntu', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  /* DEFAULT FONT SIZE*/
  h1{
    font-weight: bold;
  }

  h2{
    font-weight: bold;
  }

  input, button{
    font-size: ${fonts.regular};
  }

  input:-webkit-autofill {
    -webkit-text-fill-color: ${colors.text} !important;
    -webkit-box-shadow: 0 0 0 30px ${colors.primary} inset !important;
  }
}

  small{
    font: ${fonts.small} 'Roboto', sans-serif;
  }
`;
