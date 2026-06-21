// カテゴリE：高さ48pxのターゲットサイズが確保されたコンバージョンボタンUI。
export default function EnhancedTargetSizeButton({ width = 200, height = 48 }) {
  return (
    <div style={{ background: 'var(--color-surface)', padding: '16px' }}>
      <div
        style={{
          background: '#fff',
          border: '1px solid #e0e0e0',
          borderRadius: 8,
          padding: '20px 16px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 16,
        }}
      >
        <p style={{ margin: 0, fontSize: 12, color: '#555', textAlign: 'center' }}>
          ショッピングカート（3点）
        </p>

        <div
          style={{
            background: '#f9f9f9',
            border: '1px solid #eee',
            borderRadius: 6,
            padding: '12px',
            width: '100%',
            boxSizing: 'border-box',
          }}
        >
          {[
            { name: 'デザイン書籍A', price: '¥3,200' },
            { name: 'ステッカーセット', price: '¥580' },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: 12,
                color: '#444',
                padding: '4px 0',
                borderBottom: i === 0 ? '1px solid #eee' : 'none',
              }}
            >
              <span>{item.name}</span>
              <span>{item.price}</span>
            </div>
          ))}
        </div>

        <button
          style={{
            width,
            height,
            background: '#e53935',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            fontSize: 14,
            fontWeight: 700,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 6,
          }}
        >
          🛒 購入を確定する
        </button>

        <p style={{ margin: 0, fontSize: 10, color: '#aaa' }}>
          ボタンサイズ：{width} × {height} px
        </p>
      </div>
    </div>
  )
}
