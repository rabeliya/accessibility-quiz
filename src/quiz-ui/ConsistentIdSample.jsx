// カテゴリD：同じ「お気に入り」機能なのに画面によってアイコンが異なるUI。
const ICON_MAP = {
  bookmark: '🔖',
  star: '⭐',
  heart: '❤️',
  pin: '📌',
}

export default function ConsistentIdSample({
  detailPageIcon = 'bookmark',
  myPageIcon = 'star',
  functionName = 'お気に入り登録',
}) {
  return (
    <div style={{ background: 'var(--color-surface)', padding: '16px', display: 'flex', gap: 12 }}>
      {/* 記事詳細画面 */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
        <p style={{ margin: 0, fontSize: 11, color: '#888' }}>記事詳細画面</p>
        <div
          style={{
            background: '#fff',
            border: '1px solid #e0e0e0',
            borderRadius: 8,
            padding: '12px',
          }}
        >
          <p style={{ margin: '0 0 6px', fontSize: 13, fontWeight: 600, color: '#111', lineHeight: 1.4 }}>
            デザインの新潮流：2025年のトレンド
          </p>
          <p style={{ margin: '0 0 10px', fontSize: 11, color: '#666', lineHeight: 1.5 }}>
            今年注目のUIデザイントレンドを総まとめ…
          </p>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button
              type="button"
              aria-label={functionName}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 4,
                background: 'none',
                border: '1px solid #e0e0e0',
                borderRadius: 6,
                padding: '4px 10px',
                cursor: 'pointer',
                fontSize: 13,
              }}
            >
              <span>{ICON_MAP[detailPageIcon]}</span>
              <span style={{ fontSize: 11, color: '#555' }}>保存</span>
            </button>
          </div>
        </div>
      </div>

      {/* マイページ */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
        <p style={{ margin: 0, fontSize: 11, color: '#888' }}>マイページ（保存済み一覧）</p>
        <div
          style={{
            background: '#fff',
            border: '1px solid #e0e0e0',
            borderRadius: 8,
            padding: '12px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
            <span style={{ fontSize: 16 }}>{ICON_MAP[myPageIcon]}</span>
            <p style={{ margin: 0, fontSize: 13, fontWeight: 700, color: '#111' }}>
              {functionName}リスト
            </p>
          </div>
          {['デザインの新潮流：2025年…', 'WCAGガイドライン入門…'].map((title, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '6px 0',
                borderTop: i > 0 ? '1px solid #f0f0f0' : 'none',
              }}
            >
              <span style={{ fontSize: 14 }}>{ICON_MAP[myPageIcon]}</span>
              <span style={{ fontSize: 12, color: '#333' }}>{title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
