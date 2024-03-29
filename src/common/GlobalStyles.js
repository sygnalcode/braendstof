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
  background: #000;
}

input,
textarea,
button,
select,
div,
a {
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}

h1 {
  display: inline-block;
  width: auto;
  color: white;
  font-size: 1.25rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  background: #232323;
  padding: 5px 12px 5px 0;
  margin: 16px 0 0 32px;
}

h2 {
  font-family: 'Caveat', cursive;
  font-weight: 700;
  color: #232323;
  font-size: 3.2rem;
  padding: 0;
  margin-top: -8px;
  margin-bottom: -10px;
}

p {
  font-size: 1.3rem;
  font-weight: bold;
  line-height: 1.6rem;
  color: #232323;
  padding: 0;
  margin: 0;
}
`

export default GlobalStyle
