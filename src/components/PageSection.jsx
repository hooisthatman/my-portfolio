import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

// dark: 다크 섹션(검정 배경), 그 외에는 카드형 라이트 섹션
export default function PageSection({ label, title, children, dark = false, bg }) {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        bgcolor: dark ? 'var(--color-bg-dark)' : (bg ?? 'var(--color-bg-primary)'),
        color: dark ? 'var(--color-text-on-dark)' : 'var(--color-text-primary)',
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography
          variant="overline"
          sx={{
            fontWeight: 700,
            letterSpacing: '0.2em',
            color: 'var(--color-accent)',
          }}
        >
          {label}
        </Typography>
        <Card
          variant="outlined"
          sx={{
            mt: 1.5,
            bgcolor: dark ? 'rgba(255,255,255,0.04)' : 'var(--color-bg-secondary)',
            borderColor: dark ? 'rgba(255,255,255,0.12)' : 'var(--color-border)',
            boxShadow: dark ? 'none' : 'var(--shadow-default)',
            color: 'inherit',
          }}
        >
          <CardContent sx={{ p: { xs: 3, md: 6 } }}>
            <Typography variant="h4" component="h2" sx={{ fontWeight: 800, mb: 2 }}>
              {title}
            </Typography>
            <Typography
              sx={{
                color: dark ? 'var(--color-text-on-dark-muted)' : 'var(--color-text-muted)',
                lineHeight: 1.8,
                wordBreak: 'keep-all',
              }}
            >
              {children}
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  )
}
