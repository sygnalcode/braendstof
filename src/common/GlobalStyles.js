import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  @import url('https://fonts.googleapis.com/css?family=Sedgwick+Ave&display=swap');
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #000;
}

h1 {
  display: inline-block;
  width: auto;
  color: white;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  background: #232323;
  padding: 5px 12px 5px 0;
  margin: 1rem 0 0 2rem;
}

h2 {
  font-family: 'Sedgwick Ave', cursive;
  font-weight: 400;
  color: #232323;
  font-size: 2.8rem;
  padding: 0;
  margin-top: 0;
  margin-bottom: -5px;
}

p {
  font-size: 1.5rem;
  font-weight: bold;
  color: #232323;
  padding: 0;
  margin: 0;
  hyphens: auto;
  text-align: justify;
}
`

export default GlobalStyle
