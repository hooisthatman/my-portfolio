import { createClient } from '@supabase/supabase-js'

// 공개용(publishable) 키라서 코드에 포함해도 안전하다. 접근 제어는 DB의 RLS/컬럼 권한이 담당한다.
const SUPABASE_URL = 'https://nrotgwuiribelzxhzimj.supabase.co'
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_lYwy0ddyxi04yfKOTVj6dQ_O7ox8L0-'

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY)
