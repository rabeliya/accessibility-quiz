// カテゴリE：アイコンサイズが小さく、タップ領域も狭いヘッダーボタンの「bad」パターン。
// iconSize / targetSize props でサイズを制御し、視覚的なサイズと実際のタップ領域の乖離を示す。
const ICONS = [
  { label: '通知', svg: '🔔' },
  { label: '検索', svg: '🔍' },
  { label: '設定', svg: '⚙️' },
]

export default function IconButtonSettings({ iconSize = 18, targetSize = 18 }) {
  return (
    <div
      style={{
        background: 'var(--color-surface)',
        padding: '12px 16px',
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
      }}
    >
      {/* ヘッダーバーのモック */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: '#fff',
          borderRadius: 8,
          padding: '10px 12px',
          boxShadow: '0 1px 4px rgba(0,0,0,0.12)',
        }}
      >
        {/* 左：戻るボタン（目立たせるため通常サイズ） */}
        <button
          type="button"
          style={{
            width: 36,
            height: 36,
            display: 'grid',
            placeItems: 'center',
            background: 'none',
            border: 'none',
            borderRadius: 8,
            cursor: 'pointer',
            fontSize: 18,
          }}
          aria-label="戻る"
        >
          ←
        </button>

        <span style={{ fontWeight: 600, fontSize: 14, color: '#222' }}>マイページ</span>

        {/* 右：アイコンボタン群（タップ領域が iconSize と同じ） */}
        <div style={{ display: 'flex', gap: 4 }}>
          {ICONS.map(({ label, svg }) => (
            <button
              key={label}
              type="button"
              aria-label={label}
              style={{
                width: targetSize,
                height: targetSize,
                display: 'grid',
                placeItems: 'center',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: iconSize,
                padding: 0,
              }}
            >
              {svg}
            </button>
          ))}
        </div>
      </div>

    </div>
  )
}
