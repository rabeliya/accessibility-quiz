import { useState, useEffect } from 'react'

// カテゴリB：自動再生されるバナーカルーセル。停止ボタンがないパターン。
const SLIDES = [
  { bg: 'linear-gradient(135deg, #ff6b6b, #feca57)', title: '春の大感謝セール', sub: '全品 20% OFF' },
  { bg: 'linear-gradient(135deg, #48dbfb, #0abde3)', title: '新作コレクション', sub: '本日発売開始' },
  { bg: 'linear-gradient(135deg, #ff9ff3, #f368e0)', title: 'ポイント5倍キャンペーン', sub: '今週末まで' },
]

export default function AutoPlayCarousel({ autoPlay = true, interval = 5000, hasStopButton = false }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!autoPlay) return
    const ms = Math.min(interval, 2500)
    const timer = setInterval(() => setCurrent(i => (i + 1) % SLIDES.length), ms)
    return () => clearInterval(timer)
  }, [autoPlay, interval])

  const prev = () => setCurrent(i => (i - 1 + SLIDES.length) % SLIDES.length)
  const next = () => setCurrent(i => (i + 1) % SLIDES.length)

  return (
    <div style={{ background: 'var(--color-surface)', padding: '16px' }}>
      <div style={{ position: 'relative', borderRadius: 10, overflow: 'hidden', height: 140 }}>
        <div
          style={{
            height: '100%',
            background: SLIDES[current].bg,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.5s ease',
          }}
        >
          <p style={{ margin: 0, color: '#fff', fontSize: 18, fontWeight: 700, textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}>
            {SLIDES[current].title}
          </p>
          <p style={{ margin: '6px 0 0', color: 'rgba(255,255,255,0.9)', fontSize: 13 }}>
            {SLIDES[current].sub}
          </p>
        </div>

        <button
          type="button"
          onClick={prev}
          aria-label="前のバナー"
          style={{ position: 'absolute', left: 8, top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.3)', color: '#fff', border: 'none', borderRadius: '50%', width: 28, height: 28, cursor: 'pointer', fontSize: 16, lineHeight: 1 }}
        >
          ‹
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="次のバナー"
          style={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.3)', color: '#fff', border: 'none', borderRadius: '50%', width: 28, height: 28, cursor: 'pointer', fontSize: 16, lineHeight: 1 }}
        >
          ›
        </button>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 6, marginTop: 10 }}>
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            aria-label={`スライド${i + 1}`}
            style={{ width: 8, height: 8, borderRadius: '50%', background: i === current ? '#5c6bc0' : '#ccc', border: 'none', cursor: 'pointer', padding: 0 }}
          />
        ))}
        {hasStopButton && (
          <button
            type="button"
            aria-label="一時停止"
            style={{ marginLeft: 6, fontSize: 13, background: 'none', border: '1px solid #999', borderRadius: 4, padding: '1px 8px', cursor: 'pointer' }}
          >
            ⏸
          </button>
        )}
      </div>
    </div>
  )
}
