// カテゴリF：確認画面なしで即時送金処理が確定する振込フォームUI。
export default function IrreversibleActionForm({ buttonLabel = '今すぐ振り込む' }) {
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
        <div style={{ background: '#1b5e20', padding: '10px 14px' }}>
          <p style={{ margin: 0, fontSize: 13, fontWeight: 700, color: '#fff' }}>
            振込手続き
          </p>
        </div>

        <div style={{ padding: '14px' }}>
          {/* 口座情報 */}
          <div
            style={{
              background: '#f9f9f9',
              border: '1px solid #eee',
              borderRadius: 6,
              padding: '10px 12px',
              marginBottom: 12,
            }}
          >
            <p style={{ margin: '0 0 4px', fontSize: 11, color: '#777' }}>振込先</p>
            <p style={{ margin: 0, fontSize: 12, fontWeight: 600, color: '#222' }}>
              ◯◯銀行 渋谷支店 普通 1234567
            </p>
            <p style={{ margin: '2px 0 0', fontSize: 12, color: '#444' }}>田中 花子（タナカ ハナコ）</p>
          </div>

          {/* 金額入力 */}
          <div style={{ marginBottom: 14 }}>
            <label style={{ display: 'block', fontSize: 11, fontWeight: 600, color: '#444', marginBottom: 3 }}>
              振込金額
            </label>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ fontSize: 16, fontWeight: 700, color: '#333' }}>¥</span>
              <input
                type="text"
                readOnly
                value="100,000"
                style={{
                  flex: 1,
                  border: '1px solid #ccc',
                  borderRadius: 5,
                  padding: '8px 10px',
                  fontSize: 15,
                  fontWeight: 700,
                  color: '#222',
                  boxSizing: 'border-box',
                }}
              />
            </div>
          </div>

          {/* 送信ボタン（確認なし） */}
          <button
            style={{
              width: '100%',
              padding: '12px',
              background: '#388e3c',
              color: '#fff',
              border: 'none',
              borderRadius: 6,
              fontSize: 14,
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            {buttonLabel}
          </button>
        </div>
      </div>
    </div>
  )
}
