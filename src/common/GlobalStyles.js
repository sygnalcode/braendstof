import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #eee;
}

h1 {
  color: white;
  text-transform: uppercase;
  background: #232323;
  background-position: right 20px bottom 10px;
  display: inline-block;
  padding: 7px 15px 7px 0;
  margin: 0;
}

h2 {
  color: #232323;
  font-size: 3rem;
  padding: 0;
  margin: 25px 0 15px 0;
}

p {
  font-size: 1.8rem;
  font-weight: bold;
  color: #232323;
  padding: 0;
  margin: 20px 0 0 0;
  hyphens: auto;
  text-align: justify;
}
`

export default GlobalStyle
