import { createTheme } from '@mui/material/styles'

// 색상 값은 styles/global.css 의 CSS 변수를 참조한다
export default createTheme({
  cssVariables: true,
  shape: { borderRadius: 8 },
  typography: {
    fontFamily: '"Pretendard", "Noto Sans KR", system-ui, sans-serif',
    h1: { fontWeight: 800, letterSpacing: '-0.02em' },
    h2: { fontWeight: 800, letterSpacing: '-0.02em' },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: 'var(--color-bg-primary)',
          color: 'var(--color-text-primary)',
        },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { textTransform: 'none', fontWeight: 600 },
        contained: {
          backgroundColor: 'var(--color-button-primary)',
          color: 'var(--color-bg-primary)',
          '&:hover': { backgroundColor: 'var(--color-button-hover)', color: '#fff' },
        },
        outlined: {
          borderColor: 'var(--color-border-strong)',
          color: 'var(--color-text-primary)',
          '&:hover': {
            borderColor: 'var(--color-button-hover)',
            color: 'var(--color-button-hover)',
            backgroundColor: 'transparent',
          },
        },
      },
    },
  },
})
