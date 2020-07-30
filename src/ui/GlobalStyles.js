import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 
   * {
    box-sizing: border-box;
   }

   body{
    font-family: arial,tahoma,sans-serif;
  }

  .App{
    max-width: 1000px;
    margin: auto;
  }
  a {
    color: #6188ce;
    text-decoration: none;
}
`;
