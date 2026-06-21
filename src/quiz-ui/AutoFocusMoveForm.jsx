import { useState, useRef } from 'react'

// カテゴリF：4桁入力が完了すると自動で次の入力欄にフォーカスが移動するクレカ番号UIo
export default function AutoFocusMoveForm({ autoAdvance = true, boxCount = 4 }) {
  const [values, setValues] = useState(Array(boxCount).fill(''))
  const refs = Array.from({ length: boxCount }, () => useRef(null))

  const handleChange = (i, val) => {
    const cleaned = val.replace(/\D/g, '').slice(0, 4)
    const next = [...values]
    next[i] = cleaned
    setValues(next)
    if (autoAdvance && cleaned.length === 4 && i < boxCount - 1) {
      refs[i + 1].current?.focus()
    }
  }

  return (
    <div style={{ background: 'var(--color-surface)', padding: '16px' }}>
      <div
        style={{
          background: '#fff',
          border: '1px solid #e0e0e0',
          borderRadius: 8,
          padding: '20px 16px',
        }}
      >
        <p style={{ margin: '0 0 14px', fontSize: 13, fontWeight: 700, color: '#222' }}>
          クレジットカード情報
        </p>

        <div style={{ marginBottom: 14 }}>
          <label style={{ display: 'block', fontSize: 11, fontWeight: 600, color: '#444', marginBottom: 8 }}>
            カード番号
          </label>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            {Array.from({ length: boxCount }).map((_, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <input
                  ref={refs[i]}
                  type="text"
                  inputMode="numeric"
                  maxLength={4}
                  value={values[i]}
                  onChange={(e) => handleChange(i, e.target.value)}
                  placeholder="0000"
                  style={{
                    width: 52,
                    border: '1px solid #ccc',
                    borderRadius: 5,
                    padding: '8px 6px',
                    fontSize: 15,
                    textAlign: 'center',
                    letterSpacing: 2,
                    color: '#222',
                    boxSizing: 'border-box',
                  }}
                />
                {i < boxCount - 1 && (
                  <span style={{ color: '#bbb', fontSize: 14 }}>—</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: 10, marginBottom: 14 }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', fontSize: 11, fontWeight: 600, color: '#444', marginBottom: 4 }}>
              有効期限
            </label>
            <input
              type="text"
              readOnly
              placeholder="MM / YY"
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
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', fontSize: 11, fontWeight: 600, color: '#444', marginBottom: 4 }}>
              セキュリティコード
            </label>
            <input
              type="text"
              readOnly
              placeholder="123"
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
        </div>

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
          支払いを確定する
        </button>
      </div>
    </div>
  )
}
