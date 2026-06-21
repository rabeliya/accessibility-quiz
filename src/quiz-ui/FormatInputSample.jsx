// カテゴリF：入力形式（フォーマット）の案内がない電話番号入力欄UI。
export default function FormatInputSample({ label = '電話番号', hasGuide = false }) {
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
          ホテル予約
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {/* 他のフィールド */}
          {[
            { label: 'お名前', placeholder: '山田 太郎' },
            { label: 'メールアドレス', placeholder: 'sample@example.com' },
          ].map((f, i) => (
            <div key={i}>
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

          {/* 電話番号欄（フォーマット案内なし） */}
          <div>
            <label style={{ display: 'block', fontSize: 11, fontWeight: 600, color: '#444', marginBottom: 3 }}>
              {label}
            </label>
            {hasGuide && (
              <p style={{ margin: '0 0 4px', fontSize: 10, color: '#777' }}>
                ハイフンなしの半角数字で入力してください（例：09012345678）
              </p>
            )}
            <input
              type="tel"
              readOnly
              placeholder="090-1234-5678"
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

          <button
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
            予約を確定する
          </button>
        </div>
      </div>
    </div>
  )
}
