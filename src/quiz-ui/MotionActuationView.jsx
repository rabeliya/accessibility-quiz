// カテゴリE：デバイスを振るとUndoできる仕様のチュートリアル画面。画面上に操作ボタンはない。
export default function MotionActuationView({ trigger = 'shake-only' }) {
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
        <div style={{ background: '#37474f', padding: '10px 14px' }}>
          <p style={{ margin: 0, fontSize: 13, fontWeight: 700, color: '#fff' }}>お絵かきアプリ</p>
        </div>

        {/* キャンバス風のエリア */}
        <div
          style={{
            background: '#fafafa',
            height: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderBottom: '1px solid #eee',
          }}
        >
          <svg width="120" height="60" viewBox="0 0 120 60">
            <path d="M10,50 Q30,10 60,30 Q90,50 110,10" stroke="#4fc3f7" strokeWidth="3" fill="none" strokeLinecap="round" />
            <circle cx="40" cy="35" r="8" fill="#ef9a9a" opacity="0.6" />
          </svg>
        </div>

        {/* 操作ヒント */}
        <div style={{ padding: '12px 14px', background: '#e8f5e9' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 28 }}>📱</span>
            <div>
              <p style={{ margin: 0, fontSize: 12, fontWeight: 700, color: '#2e7d32' }}>
                ヒント：操作をやり直すには
              </p>
              <p style={{ margin: '2px 0 0', fontSize: 11, color: '#388e3c' }}>
                {trigger === 'shake-only' ? 'スマートフォンを振ってください ✦' : 'ツールバーの「↩」ボタンを押してください'}
              </p>
            </div>
          </div>
        </div>

        {/* ツールバー（Undoボタンなし） */}
        <div
          style={{
            display: 'flex',
            gap: 8,
            padding: '10px 14px',
            borderTop: '1px solid #eee',
            background: '#f9f9f9',
          }}
        >
          {['🖊 ペン', '🖌 ブラシ', '⬡ 図形', '🗑 消しゴム'].map((tool) => (
            <button
              key={tool}
              style={{
                fontSize: 10,
                padding: '4px 8px',
                border: '1px solid #ccc',
                borderRadius: 4,
                background: '#fff',
                cursor: 'default',
                color: '#333',
              }}
            >
              {tool}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
