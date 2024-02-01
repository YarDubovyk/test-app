import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,800;1,300&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
    li {
      list-style-type: none;
    }
    button {
        background-color: transparent;
        border: 0;
        cursor: pointer;
    }
    * {
      font-family: "Ubuntu", sans-serif;
      margin: 0;
      padding: 0;
       box-sizing: border-box;
      background-color: #fff;
    }
 

 
`;

export default GlobalStyle;
