import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'
import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase.js'

const formatDate = (iso) =>
  new Date(iso).toLocaleString('ko-KR', { dateStyle: 'medium', timeStyle: 'short' })

// 우측 두 번째 블록: 방명록 목록 (최근 순). name/email/phone은 DB 권한상 조회되지 않는다.
export default function GuestbookList({ refreshKey }) {
  const [entries, setEntries] = useState([])
  const [state, setState] = useState('loading')

  useEffect(() => {
    let cancelled = false
    supabase
      .from('guestbook')
      .select('id, message, rating, created_at')
      .order('created_at', { ascending: false })
      .limit(20)
      .then(({ data, error }) => {
        if (cancelled) return
        if (error) return setState('error')
        setEntries(data)
        setState('done')
      })
    return () => {
      cancelled = true
    }
  }, [refreshKey])

  return (
    <Box>
      <Typography variant="subtitle2" sx={{ color: 'var(--color-text-on-dark-muted)', mb: 2 }}>
        방명록
      </Typography>
      {state === 'loading' && <Typography variant="body2" sx={{ color: 'var(--color-text-on-dark-muted)' }}>불러오는 중...</Typography>}
      {state === 'error' && <Typography variant="body2" sx={{ color: 'var(--color-text-on-dark-muted)' }}>방명록을 불러오지 못했어요.</Typography>}
      {state === 'done' && entries.length === 0 && (
        <Typography variant="body2" sx={{ color: 'var(--color-text-on-dark-muted)' }}>첫 번째 방명록을 남겨 주세요.</Typography>
      )}
      <Box component="ul" sx={{ listStyle: 'none', m: 0, p: 0, maxHeight: 360, overflowY: 'auto' }}>
        {entries.map((e) => (
          <Box component="li" key={e.id} sx={{ py: 2, borderTop: '1px solid rgba(255,255,255,0.12)' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
              <Rating value={e.rating} readOnly size="small"
                sx={{ '& .MuiRating-iconFilled': { color: 'var(--color-accent)' }, '& .MuiRating-iconEmpty': { color: 'rgba(255,255,255,0.3)' } }} />
              <Typography variant="caption" sx={{ color: 'var(--color-text-on-dark-muted)' }}>{formatDate(e.created_at)}</Typography>
            </Box>
            <Typography sx={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{e.message}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
