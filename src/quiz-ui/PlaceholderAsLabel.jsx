import { useState } from 'react'

// カテゴリF：ラベルなし・プレースホルダーのみのフォームUI。入力すると項目名が消える。
const FIELDS = [
  { placeholder: '氏名（例：山田 太郎）', type: 'text' },
  { placeholder: 'メールアドレス（例：sample@example.com）', type: 'email' },
  { placeholder: 'パスワード（8文字以上）', type: 'password' },
]

export default function PlaceholderAsLabel({ hasExternalLabel = false, fillInput = true }) {
  const [values, setValues] = useState(
    fillInput ? ['山田 太郎', 'yamada@example.com', ''] : ['', '', '']
  )

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
        <p style={{ margin: '0 0 14px', fontSize: 13, fontWeight: 700, color: '#222' }}>
          新規会員登録
        </p>
        <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {FIELDS.map((field, i) => (
            <div key={i}>
              {hasExternalLabel && (
                <label style={{ display: 'block', fontSize: 11, fontWeight: 600, color: '#444', marginBottom: 3 }}>
                  {field.placeholder.split('（')[0]}
                </label>
              )}
              <input
                type={field.type}
                value={values[i]}
                onChange={(e) => {
                  const next = [...values]
                  next[i] = e.target.value
                  setValues(next)
                }}
                placeholder={field.placeholder}
                style={{
                  width: '100%',
                  border: '1px solid #ccc',
                  borderRadius: 5,
                  padding: '8px 10px',
                  fontSize: 12,
                  boxSizing: 'border-box',
                  color: '#333',
                }}
              />
            </div>
          ))}
          <button
            type="submit"
            style={{
              marginTop: 4,
              padding: '10px',
              background: '#1565c0',
              color: '#fff',
              border: 'none',
              borderRadius: 6,
              fontSize: 13,
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            登録する
          </button>
        </form>
      </div>
    </div>
  )
}
