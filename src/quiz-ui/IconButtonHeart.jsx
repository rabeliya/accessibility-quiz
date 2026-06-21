// カテゴリA：テキストなしのアイコンボタンが非テキスト要素コントラスト基準（3:1）を下回るパターン。
// ハートのSVGアイコンを低コントラストのグレーで表示する。
export default function IconButtonHeart({
  iconColor = '#A0A0A0',
  backgroundColor = '#FFFFFF',
}) {
  return (
    <div
      style={{
        background: 'var(--color-surface)',
        padding: '20px 16px',
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        alignItems: 'center',
      }}
    >
      {/* 商品カードのモック（最小限） */}
      <div
        style={{
          background: backgroundColor,
          border: '1px solid #e0e0e0',
          borderRadius: 10,
          padding: '14px 16px',
          width: '100%',
          maxWidth: 260,
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
        }}
      >
        {/* 商品画像プレースホルダー */}
        <div
          style={{
            height: 100,
            background: 'linear-gradient(135deg, #f3e5f5, #e8eaf6)',
            borderRadius: 6,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 32,
          }}
        >
          👜
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <p style={{ margin: 0, fontWeight: 600, fontSize: 13, color: '#222' }}>レザーバッグ</p>
            <p style={{ margin: '2px 0 0', fontSize: 13, color: '#e53935', fontWeight: 700 }}>¥32,000</p>
          </div>

          {/* お気に入りボタン：アイコンのみ、低コントラスト */}
          <button
            type="button"
            aria-label="お気に入りに追加"
            style={{
              width: 40,
              height: 40,
              display: 'grid',
              placeItems: 'center',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
            }}
          >
            <svg
              width="26"
              height="24"
              viewBox="0 0 26 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M13 21.5C13 21.5 2 14.5 2 7.5C2 4.46 4.46 2 7.5 2C9.24 2 10.82 2.84 12 4.08C13.18 2.84 14.76 2 16.5 2C19.54 2 22 4.46 22 7.5C22 14.5 13 21.5 13 21.5Z"
                stroke={iconColor}
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

    </div>
  )
}
