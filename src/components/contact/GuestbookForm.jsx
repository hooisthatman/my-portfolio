import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Rating from '@mui/material/Rating'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import { supabase } from '../../lib/supabase.js'

const initial = { name: '', message: '', rating: 5, email: '', phone: '' }

// 다크 배경용 입력창 스타일
const fieldSx = {
  '& .MuiInputBase-root': { color: 'var(--color-text-on-dark)', bgcolor: 'rgba(255,255,255,0.04)' },
  '& .MuiInputLabel-root': { color: 'var(--color-text-on-dark-muted)' },
  '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.12)' },
  '& .MuiFormHelperText-root': { color: 'var(--color-text-on-dark-muted)' },
}

// 우측 첫 번째 블록: 방명록 작성 폼
export default function GuestbookForm({ onSubmitted }) {
  const [form, setForm] = useState(initial)
  const [status, setStatus] = useState({ type: 'idle' })

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.message.trim()) {
      setStatus({ type: 'error', text: '이름과 메시지를 입력해 주세요.' })
      return
    }
    setStatus({ type: 'loading' })
    const { error } = await supabase.from('guestbook').insert({
      name: form.name.trim(),
      message: form.message.trim(),
      rating: form.rating,
      email: form.email.trim() || null,
      phone: form.phone.trim() || null,
    })
    if (error) {
      setStatus({ type: 'error', text: '등록에 실패했어요. 잠시 후 다시 시도해 주세요.' })
      return
    }
    setForm(initial)
    setStatus({ type: 'success', text: '방명록이 등록되었어요. 감사합니다!' })
    onSubmitted?.()
  }

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="subtitle2" sx={{ color: 'var(--color-text-on-dark-muted)' }}>
        방명록 남기기
      </Typography>
      <TextField label="이름" size="small" required value={form.name} onChange={set('name')} sx={fieldSx}
        slotProps={{ htmlInput: { maxLength: 30 } }} helperText="이름은 공개되지 않아요" />
      <TextField label="메시지" size="small" required multiline minRows={3} value={form.message}
        onChange={set('message')} sx={fieldSx} slotProps={{ htmlInput: { maxLength: 500 } }} />
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <Typography variant="body2" sx={{ color: 'var(--color-text-on-dark-muted)' }}>별점</Typography>
        <Rating
          value={form.rating}
          onChange={(_, v) => v && setForm((f) => ({ ...f, rating: v }))}
          sx={{ '& .MuiRating-iconFilled': { color: 'var(--color-accent)' }, '& .MuiRating-iconEmpty': { color: 'rgba(255,255,255,0.3)' } }}
        />
      </Box>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
        <TextField label="이메일 (선택)" type="email" size="small" value={form.email} onChange={set('email')}
          sx={fieldSx} slotProps={{ htmlInput: { maxLength: 100 } }} />
        <TextField label="전화번호 (선택)" type="tel" size="small" value={form.phone} onChange={set('phone')}
          sx={fieldSx} slotProps={{ htmlInput: { maxLength: 30 } }} />
      </Box>
      <Typography variant="caption" sx={{ color: 'var(--color-text-on-dark-muted)' }}>
        이메일과 전화번호는 비공개로 저장돼요.
      </Typography>
      {(status.type === 'error' || status.type === 'success') && (
        <Alert severity={status.type} variant="outlined" sx={{ color: 'inherit' }}>{status.text}</Alert>
      )}
      <Button
        type="submit"
        variant="contained"
        disabled={status.type === 'loading'}
        sx={{
          alignSelf: 'flex-start',
          px: 3,
          bgcolor: 'var(--color-accent)',
          color: '#fff',
          '&:hover': { bgcolor: 'var(--color-link-hover)' },
        }}
      >
        {status.type === 'loading' ? '등록 중...' : '등록하기'}
      </Button>
    </Box>
  )
}
