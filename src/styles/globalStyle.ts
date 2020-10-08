import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
		}	

	html {
		font-size: 16px;
	}

	body {
		font-family: 'Roboto', sans-serif;
		cursor: default;
	  @media (max-width: 768px) {
		font-size: 14px;
		}
	}

	img {
		vertical-align: middle;
		border-style: none;
		max-width: 100%;
		object-fit: cover;
		object-position: center;
	}
`
