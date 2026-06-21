import { useState, useEffect } from 'react'

// カテゴリF：制限時間があるが、残り時間の警告表示がないチケット購入フォームUI。
export default function SessionTimeoutForm({ timeLimit = '15:00', hasWarning = false }) {
  const [mins, secs] = timeLimit.split(':').map(Number)
  const totalSec = mins * 60 + secs
  const [remaining, setRemaining] = useState(totalSec)

  useEffect(() => {
    const timer = setInterval(() => {
      setRemaining((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const displayMins = Math.floor(remaining / 60)
  const displaySecs = remaining % 60
  const isWarning = remaining < 120

  return (
    <div style={{ background: 'var(--color-surface)', padding: '16px' }}>
      <div
        style={{
          background: '#fff',
          border: '1px solid #e0e0e0',
          borderRadius: 8,
          overflow: 'hidden',
        }}
      >
        {/* ヘッダー */}
        <div style={{ background: '#1a237e', padding: '10px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ margin: 0, fontSize: 13, fontWeight: 700, color: '#fff' }}>
            チケット購入 — お客様情報
          </p>
          {hasWarning && isWarning && (
            <span style={{ fontSize: 11, background: '#ffcc02', color: '#333', padding: '2px 8px', borderRadius: 10, fontWeight: 700 }}>
              ⏰ 残り {displayMins}:{String(displaySecs).padStart(2, '0')}
            </span>
          )}
        </div>

        {/* フォーム */}
        <div style={{ padding: '14px' }}>
          {[
            { label: '氏名（購入者）', placeholder: '山田 太郎' },
            { label: 'メールアドレス', placeholder: 'sample@example.com' },
            { label: 'クレジットカード番号', placeholder: '1234 5678 9012 3456' },
          ].map((f, i) => (
            <div key={i} style={{ marginBottom: 10 }}>
              <label style={{ display: 'block', fontSize: 11, fontWeight: 600, color: '#444', marginBottom: 3 }}>
                {f.label}
              </label>
              <input
                type="text"
                readOnly
                placeholder={f.placeholder}
                style={{
                  width: '100%',
                  border: '1px solid #ccc',
                  borderRadius: 5,
                  padding: '7px 10px',
                  fontSize: 12,
                  color: '#999',
                  boxSizing: 'border-box',
                }}
              />
            </div>
          ))}

          <button
            style={{
              width: '100%',
              padding: '10px',
              background: '#e53935',
              color: '#fff',
              border: 'none',
              borderRadius: 6,
              fontSize: 13,
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            購入を確定する
          </button>
        </div>
      </div>
    </div>
  )
}
