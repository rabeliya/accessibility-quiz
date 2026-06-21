// カテゴリE：テキストラベルがなくアイコンのみの送信ボタンUI。
export default function IconOnlySubmitButton({ hasTextLabel = false, icon = 'paper-plane' }) {
  const ICON = icon === 'paper-plane' ? '✈' : '▶'

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
        <p style={{ margin: '0 0 12px', fontSize: 13, fontWeight: 700, color: '#222' }}>
          お問い合わせ
        </p>

        {/* メッセージ入力欄 */}
        <div style={{ marginBottom: 12 }}>
          <label style={{ display: 'block', fontSize: 11, fontWeight: 600, color: '#555', marginBottom: 4 }}>
            メッセージ
          </label>
          <textarea
            readOnly
            placeholder="お問い合わせ内容をご記入ください"
            rows={3}
            style={{
              width: '100%',
              border: '1px solid #ccc',
              borderRadius: 5,
              padding: '7px 10px',
              fontSize: 12,
              color: '#999',
              resize: 'none',
              boxSizing: 'border-box',
            }}
          />
        </div>

        {/* 送信ボタン（アイコンのみ） */}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button
            style={{
              width: 44,
              height: 44,
              borderRadius: '50%',
              background: '#1565c0',
              color: '#fff',
              border: 'none',
              fontSize: 18,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            {ICON}
            {hasTextLabel && (
              <span style={{ fontSize: 8, marginTop: 2 }}>送信</span>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
