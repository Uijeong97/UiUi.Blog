import Typography from 'typography'
import GitHubTheme from 'typography-theme-github'

GitHubTheme.overrideThemeStyles = () => {
  return {
    body: {
      lineHeight: 1.7,
      color: `#313131`,
    },
    a: {
      boxShadow: `none`,
      textDecoration: `none`,
      color: `#af8147`,
    },
    'a.gatsby-resp-image-link': {
      boxShadow: `none`,
      textDecoration: `none`,
    },

    'a:hover': {
      textDecoration: `none`,
    },

    h1: {
      fontWeight: 800,
      lineHeight: 1.2,
      fontFamily: 'PT-Sans',
      color: `#000000`,
    },

    h2: {
      fontWeight: 700,
      lineHeight: 1.2,
      marginTop: '56px',
      marginBottom: '20px',
      fontFamily: 'PT-Sans',
      color: `#000000`,
    },

    ul: {
      marginBottom: '6px',
    },

    li: {
      marginBottom: '2px',
    },

    '::selection': {
      background: `#af8147`,
      color: `#fff`,
    },

    '::-moz-selection': {
      background: `#af8147`,
      color: `#fff`,
    }
  }
}

const typography = new Typography(GitHubTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
