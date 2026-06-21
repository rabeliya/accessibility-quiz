// カテゴリE：ドラッグ＆ドロップのみでカードを移動するカンバンUI。
const COLUMNS = ['未着手', '進行中', '完了']
const CARDS = [
  { id: 1, col: 0, title: '機能要件定義', tag: '設計' },
  { id: 2, col: 0, title: 'UIコンポーネント作成', tag: '実装' },
  { id: 3, col: 1, title: 'API接続テスト', tag: '実装' },
]

export default function KanbanDragDrop({ allowOnlyDrag = true }) {
  return (
    <div style={{ background: 'var(--color-surface)', padding: '16px' }}>
      <div style={{ display: 'flex', gap: 10, overflowX: 'auto' }}>
        {COLUMNS.map((col, ci) => (
          <div
            key={ci}
            style={{
              flex: '0 0 140px',
              background: '#f5f5f5',
              borderRadius: 8,
              padding: '10px 8px',
              border: '1px solid #e0e0e0',
              minHeight: 160,
            }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: '#555',
                marginBottom: 8,
                paddingBottom: 6,
                borderBottom: '1px solid #ddd',
              }}
            >
              {col} ({CARDS.filter((c) => c.col === ci).length})
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {CARDS.filter((c) => c.col === ci).map((card) => (
                <div
                  key={card.id}
                  draggable={allowOnlyDrag}
                  style={{
                    background: '#fff',
                    border: '1px solid #ddd',
                    borderRadius: 6,
                    padding: '8px 10px',
                    cursor: 'grab',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                  }}
                >
                  <p style={{ margin: 0, fontSize: 11, fontWeight: 600, color: '#222', lineHeight: 1.4 }}>
                    {card.title}
                  </p>
                  <span
                    style={{
                      display: 'inline-block',
                      marginTop: 4,
                      fontSize: 10,
                      background: '#e3f2fd',
                      color: '#1565c0',
                      padding: '1px 5px',
                      borderRadius: 3,
                    }}
                  >
                    {card.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p style={{ margin: '10px 0 0', fontSize: 10, color: '#999', textAlign: 'center' }}>
        カードをドラッグして列を移動
      </p>
    </div>
  )
}
