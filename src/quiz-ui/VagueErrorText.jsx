// カテゴリF：エラー原因は示すが修正方法を含まない曖昧なエラーメッセージUI。
export default function VagueErrorText({ message = 'パスワードが正しくありません', color = '#E41A1C' }) {
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
          パスワードを設定
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div>
            <label style={{ display: 'block', fontSize: 11, fontWeight: 600, color: '#444', marginBottom: 4 }}>
              新しいパスワード
            </label>
            <input
              type="password"
              readOnly
              value="password123"
              style={{
                width: '100%',
                border: `1.5px solid ${color}`,
                borderRadius: 5,
                padding: '8px 10px',
                fontSize: 12,
                color: '#333',
                boxSizing: 'border-box',
              }}
            />
            <p style={{ margin: '5px 0 0', fontSize: 11, color, fontWeight: 500 }}>
              ⚠ {message}
            </p>
          </div>

          <button
            style={{
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
            設定する
          </button>
        </div>
      </div>
    </div>
  )
}
