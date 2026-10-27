import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { NavLink } from 'react-router-dom'

const tabs = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Me' },
  { to: '/projects', label: 'Projects' },
]

export default function Navbar() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: 'var(--color-bg-dark)',
        color: 'var(--color-text-on-dark)',
        borderBottom: '1px solid rgba(255,255,255,0.12)',
      }}
    >
      <Container maxWidth="md">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 800, letterSpacing: '0.08em' }}>
            MY PORTFOLIO
          </Typography>
          <Box component="nav" sx={{ display: 'flex', gap: 0.5 }}>
            {tabs.map((t) => (
              <Button
                key={t.to}
                component={NavLink}
                to={t.to}
                end
                sx={{
                  color: 'var(--color-text-on-dark-muted)',
                  borderRadius: 0,
                  borderBottom: '2px solid transparent',
                  '&:hover': { color: '#fff', bgcolor: 'transparent' },
                  '&.active': { color: '#fff', borderBottomColor: 'var(--color-accent)' },
                }}
              >
                {t.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
