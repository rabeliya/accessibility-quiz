import { useState } from 'react'

// カテゴリE：ドラッグ操作のみで値を変えられる価格レンジスライダー。テキスト入力や＋ーボタンはない。
export default function PriceSliderSample({ min = 1000, max = 10000 }) {
  const [low, setLow] = useState(3000)
  const [high, setHigh] = useState(7000)
  const range = max - min
  const lowPct = ((low - min) / range) * 100
  const highPct = ((high - min) / range) * 100

  return (
    <div style={{ background: 'var(--color-surface)', padding: '16px' }}>
      <div
        style={{
          background: '#fff',
          border: '1px solid #e0e0e0',
          borderRadius: 8,
          padding: '16px',
        }}
      >
        <p style={{ margin: '0 0 4px', fontSize: 13, fontWeight: 700, color: '#222' }}>
          価格帯で絞り込む
        </p>
        <p style={{ margin: '0 0 16px', fontSize: 12, color: '#555' }}>
          ¥{low.toLocaleString()} 〜 ¥{high.toLocaleString()}
        </p>

        <div style={{ position: 'relative', height: 36, marginBottom: 8 }}>
          {/* トラック */}
          <div
            style={{
              position: 'absolute',
              top: 16,
              left: 0,
              right: 0,
              height: 4,
              background: '#e0e0e0',
              borderRadius: 2,
            }}
          />
          {/* アクティブ範囲 */}
          <div
            style={{
              position: 'absolute',
              top: 16,
              left: `${lowPct}%`,
              width: `${highPct - lowPct}%`,
              height: 4,
              background: '#1565c0',
              borderRadius: 2,
            }}
          />
          {/* 低い方のノブ */}
          <input
            type="range"
            min={min}
            max={max}
            step={500}
            value={low}
            onChange={(e) => {
              const v = Number(e.target.value)
              if (v < high) setLow(v)
            }}
            style={{
              position: 'absolute',
              width: '100%',
              top: 10,
              appearance: 'none',
              background: 'transparent',
              outline: 'none',
              pointerEvents: 'auto',
            }}
          />
          {/* 高い方のノブ */}
          <input
            type="range"
            min={min}
            max={max}
            step={500}
            value={high}
            onChange={(e) => {
              const v = Number(e.target.value)
              if (v > low) setHigh(v)
            }}
            style={{
              position: 'absolute',
              width: '100%',
              top: 10,
              appearance: 'none',
              background: 'transparent',
              outline: 'none',
              pointerEvents: 'auto',
            }}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#999' }}>
          <span>¥{min.toLocaleString()}</span>
          <span>¥{max.toLocaleString()}</span>
        </div>
      </div>
    </div>
  )
}
