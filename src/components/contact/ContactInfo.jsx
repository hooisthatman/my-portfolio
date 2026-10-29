import EmailOutlined from '@mui/icons-material/EmailOutlined'
import GitHub from '@mui/icons-material/GitHub'
import Instagram from '@mui/icons-material/Instagram'
import LinkedIn from '@mui/icons-material/LinkedIn'
import PhoneOutlined from '@mui/icons-material/PhoneOutlined'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import { contactInfo, snsLinks } from '../../data/contact.js'

const snsIcons = { github: GitHub, linkedin: LinkedIn, instagram: Instagram }

const rows = [
  { Icon: EmailOutlined, text: contactInfo.email, href: `mailto:${contactInfo.email}` },
  { Icon: PhoneOutlined, text: contactInfo.phone, href: `tel:${contactInfo.phone.replace(/-/g, '')}` },
]

// 좌측 첫 번째 블록: 이메일/전화 (아이콘 + 텍스트)
export function ContactDetails() {
  return (
    <Box>
      <Typography variant="subtitle2" sx={{ color: 'var(--color-text-on-dark-muted)', mb: 2 }}>
        연락처
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        {rows.map(({ Icon, text, href }) => (
          <Box key={href} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Icon fontSize="small" sx={{ color: 'var(--color-accent)' }} />
            <Link href={href} underline="hover" sx={{ color: 'inherit', fontWeight: 500 }}>
              {text}
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

// 좌측 두 번째 블록: SNS 아이콘 한 줄
export function SnsLinks() {
  const items = snsLinks.filter((s) => s.url)
  return (
    <Box>
      <Typography variant="subtitle2" sx={{ color: 'var(--color-text-on-dark-muted)', mb: 1.5 }}>
        SNS
      </Typography>
      <Box sx={{ display: 'flex', gap: 0.5 }}>
        {items.map(({ key, label, url }) => {
          const Icon = snsIcons[key]
          return (
            <IconButton
              key={key}
              component="a"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              size="small"
              sx={{ color: 'var(--color-text-on-dark-muted)', '&:hover': { color: 'var(--color-accent)' } }}
            >
              <Icon fontSize="small" />
            </IconButton>
          )
        })}
      </Box>
    </Box>
  )
}
