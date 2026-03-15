import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#d4941a',
      light: '#f0b840',
      dark: '#a36a0a',
      contrastText: '#0d0703',
    },
    background: {
      default: '#0d0703',
      paper: 'rgba(255, 235, 180, 0.06)',
    },
    text: {
      primary: '#faebd7',
      secondary: 'rgba(250, 235, 215, 0.5)',
    },
    divider: 'rgba(212, 148, 26, 0.2)',
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: { fontFamily: "'Playfair Display', serif" },
    h2: { fontFamily: "'Playfair Display', serif" },
    h3: { fontFamily: "'Playfair Display', serif" },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#0d0703',
          color: '#faebd7',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          background: 'linear-gradient(145deg, rgba(30, 14, 3, 0.97), rgba(22, 10, 2, 0.97))',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1px solid rgba(212, 148, 26, 0.25)',
          borderRadius: '24px',
          boxShadow: '0 32px 64px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(212, 148, 26, 0.1), inset 0 1px 0 rgba(255, 235, 180, 0.08)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "'Inter', sans-serif",
          fontWeight: 500,
          borderRadius: '100px',
          textTransform: 'none',
          letterSpacing: '0.01em',
        },
      },
    },
  },
})

export default theme