// カテゴリF：「*」記号と赤色のみで必須項目を示し、凡例テキストのないフォームUI。
const FIELDS = [
  { label: '氏名', required: true },
  { label: 'ふりがな', required: true },
  { label: '会社名', required: false },
  { label: 'メールアドレス', required: true },
  { label: 'お問い合わせ内容', required: true },
  { label: 'ご要望（任意）', required: false },
]

export default function RequiredFieldDesign({ indicator = '*', hasNote = false }) {
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
          お問い合わせフォーム
        </p>
        {hasNote && (
          <p style={{ margin: '0 0 12px', fontSize: 11, color: '#c62828' }}>
            {indicator} は必須項目です
          </p>
        )}
        {!hasNote && <div style={{ marginBottom: 12 }} />}

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {FIELDS.map((field, i) => (
            <div key={i}>
              <label style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, fontWeight: 600, color: '#444', marginBottom: 3 }}>
                {field.label}
                {field.required && (
                  <span style={{ color: '#c62828', fontWeight: 700, fontSize: 13 }}>{indicator}</span>
                )}
              </label>
              <input
                type="text"
                readOnly
                style={{
                  width: '100%',
                  border: '1px solid #ccc',
                  borderRadius: 5,
                  padding: '6px 10px',
                  fontSize: 12,
                  color: '#ccc',
                  boxSizing: 'border-box',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
