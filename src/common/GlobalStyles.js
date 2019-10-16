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
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  background: #232323;
  padding: 5px 0 5px 0;
  margin: 0;
}

h2 {
  color: #232323;
  font-size: 2.8rem;
  padding: 0;
  margin: 22px 0 0 0;
}

p {
  font-size: 1.5rem;
  font-weight: bold;
  color: #232323;
  padding: 0;
  margin: 5px 0 0 0;
  hyphens: auto;
  text-align: justify;
}
`

export default GlobalStyle
