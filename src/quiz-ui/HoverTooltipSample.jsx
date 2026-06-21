import { useState } from 'react'

// カテゴリB：ホバーで出てタイムアウト後に自動で消えるツールチップUI。
// autoDismissTimeout が設定されており、マウスをずらすか時間経過で消える。
const TOOLS = [
  { id: 'chart',    icon: '📊', label: '売上レポート' },
  { id: 'users',   icon: '👥', label: 'メンバー管理' },
  { id: 'bell',    icon: '🔔', label: '通知設定' },
  { id: 'gear',    icon: '⚙️', label: '環境設定' },
]

export default function HoverTooltipSample({ autoDismissTimeout = 3000 }) {
  const [hoveredId, setHoveredId] = useState(null)
  const [timers, setTimers] = useState({})

  const handleEnter = (id) => {
    setHoveredId(id)
    const t = setTimeout(() => {
      setHoveredId(prev => (prev === id ? null : prev))
    }, autoDismissTimeout)
    setTimers(prev => {
      clearTimeout(prev[id])
      return { ...prev, [id]: t }
    })
  }

  const handleLeave = (id) => {
    clearTimeout(timers[id])
    setHoveredId(null)
  }

  return (
    <div style={{ background: 'var(--color-surface)', padding: '20px 16px' }}>
      {/* ダッシュボードのサイドバー風 */}
      <div
        style={{
          background: '#fff',
          border: '1px solid #e0e0e0',
          borderRadius: 10,
          padding: '12px 8px',
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          width: 56,
          margin: '0 auto',
        }}
      >
        {TOOLS.map(({ id, icon, label }) => (
          <div key={id} style={{ position: 'relative' }}>
            <button
              type="button"
              aria-label={label}
              onMouseEnter={() => handleEnter(id)}
              onMouseLeave={() => handleLeave(id)}
              onFocus={() => handleEnter(id)}
              onBlur={() => handleLeave(id)}
              style={{
                width: 40,
                height: 40,
                display: 'grid',
                placeItems: 'center',
                background: hoveredId === id ? '#f0f0f0' : 'none',
                border: 'none',
                borderRadius: 8,
                cursor: 'pointer',
                fontSize: 20,
              }}
            >
              {icon}
            </button>

            {/* ツールチップ：マウスオーバー中だけ表示、autoDismissTimeout 後に自動消滅 */}
            {hoveredId === id && (
              <div
                style={{
                  position: 'absolute',
                  left: 48,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: '#333',
                  color: '#fff',
                  fontSize: 12,
                  padding: '5px 10px',
                  borderRadius: 5,
                  whiteSpace: 'nowrap',
                  zIndex: 10,
                  pointerEvents: 'none',
                }}
              >
                {label}
                <div
                  style={{
                    position: 'absolute',
                    left: -5,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: 0,
                    height: 0,
                    borderTop: '5px solid transparent',
                    borderBottom: '5px solid transparent',
                    borderRight: '5px solid #333',
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <p style={{ textAlign: 'center', fontSize: 12, color: '#888', marginTop: 12 }}>
        アイコンにマウスをあてると説明が表示されます
      </p>
    </div>
  )
}
