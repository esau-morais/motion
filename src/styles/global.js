import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  /* fonts */
  @font-face {
    font-family: 'Quicksand';
    src: url('/fonts/framer-light.woff2') format('woff2'),
        url('/fonts/framer-light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
  }

  /* reset & common styles */
  body, ul, h1, h2, h3, p, button, a, div{
    margin: 0;
    padding: 0;
    color: white;
    font-family: 'Quicksand';
    letter-spacing: 2px;
    list-style-type: none;
    text-decoration: none;
  }
  body{
    background: rgb(100,0,123);
    background: radial-gradient(circle, rgba(100,0,123,1) 0%, rgba(62,20,86,1) 100%);
    overflow: hidden;
  }
  button{
    color: white;
    padding: 10px 30px;
    font-size: 1em;
    background: transparent;
    border-radius: 50px;
    border: 1px solid white;
    margin: 40px auto 0;
    cursor: pointer;
    opacity: 0.7;
  }
  .container{
    max-width: 300px;
    margin: 100px auto 40px;
  }
  .container h3{
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid rgba(255,255,255,0.2);
  }
  .container li{
    padding: 10px;
    cursor: pointer;
  }

  /* lists */
  li span.active{
    font-weight: bold;
  }
  li span.active::before{
    content: '>';
    position: relative;
    top: -2px;
    margin-right: 6px;
    transform: scale(0.8, 1);
    display: inline-block;
  }

  /* pages */
  .home h2{
    font-size: 2em;
    margin-bottom: 30px;
  }
  .home.container, 
  .order.container{
    text-align: center;
    max-width: 800px;
  }
  .home button{
    color: white;
    padding: 15px 30px;
    font-size: 1.6em;
    border: 3px solid white;
    margin: 30px 20px;
  }
  .order p{
    margin: 20px auto;
  }
`;

export default Global;
