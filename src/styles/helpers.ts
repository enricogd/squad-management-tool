import theme from './theme'

export function fontType(type: 'l' | 'r' | 'm' | 'b' = 'r') {
  if (type === 'l') {
    return `font-family: 'Roboto Light', sans-serif;
            font-weight: 300;
          `
  } else if (type === 'r') {
    return `font-family: 'Roboto Regular', sans-serif;
            font-weight: 400;
		`
  } else if (type === 'm') {
    return `font-family: 'Roboto Medium', sans-serif;
		    font-weight: 500;
		`
  } else if (type === 'b') {
    return `font-family: 'Roboto Bold', sans-serif;
		    font-weight: 700;
		`
  }
}

export function toRem(size: number) {
  return `${size / theme.font.sizes.base}rem`
}

export function mediaQuery(size: 'lg' | 'md' | 'sm' | 'xs') {
  return (style: string) => {
    if (size === 'lg') {
      return `@media screen and (max-width: ${theme.breakPoints.lg}px) {
				${style}
			}`
    } else if (size === 'md') {
      return `@media screen and (max-width: ${theme.breakPoints.md}px) {
				${style}
			}`
    } else if (size === 'sm') {
      return `@media screen and (max-width: ${theme.breakPoints.sm}px) {
				${style}
			}`
    } else if (size === 'xs') {
      return `@media screen and (max-width: ${theme.breakPoints.xs}px) {
				${style}
			}`
    }
  }
}

export function transition(seconds = 0.3) {
  return `-webkit-transition: all ${seconds}s;
	-moz-transition: all ${seconds}s;
	transition: all ${seconds}s;`
}
