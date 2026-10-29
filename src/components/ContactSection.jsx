import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import { ContactDetails, SnsLinks } from './contact/ContactInfo.jsx'
import GuestbookForm from './contact/GuestbookForm.jsx'
import GuestbookList from './contact/GuestbookList.jsx'

// Home의 Contact 섹션: 좌측(연락처·SNS) / 우측(방명록 작성·목록)
export default function ContactSection() {
  const [refreshKey, setRefreshKey] = useState(0)

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        bgcolor: 'var(--color-bg-dark)',
        color: 'var(--color-text-on-dark)',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="overline" sx={{ fontWeight: 700, letterSpacing: '0.2em', color: 'var(--color-accent)' }}>
          05
        </Typography>
        <Typography variant="h4" component="h2" sx={{ fontWeight: 800, mt: 1, mb: 1 }}>
          Contact
        </Typography>
        <Typography sx={{ color: 'var(--color-text-on-dark-muted)', mb: { xs: 4, md: 6 }, wordBreak: 'keep-all' }}>
          편하게 연락 주시고, 방명록에 한마디 남겨 주세요.
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1.4fr' }, gap: { xs: 5, md: 8 } }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            <ContactDetails />
            <SnsLinks />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            <GuestbookForm onSubmitted={() => setRefreshKey((k) => k + 1)} />
            <GuestbookList refreshKey={refreshKey} />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
