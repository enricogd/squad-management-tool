import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
html { height: 100%; overflow: auto; }
body {
	font-size: 16px;
	height: 100%;
	margin: 0px;
	overflow-x: hidden;
	padding: 0px;
	width: 100%;
  	font-family:  'Roboto', sans-serif;
	  @media (max-width: 768px) {
		font-size: 14px;
	}
}
  * {
    outline: 0;
  }
`
