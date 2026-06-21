// カテゴリD：全タブが同一タイトルで、どの画面を開いているか判別できないUI。
export default function PageTitleSample({
  allTabsTitle = ['社内管理システム', '社内管理システム', '社内管理システム'],
}) {
  return (
    <div style={{ background: 'var(--color-surface)', padding: '16px' }}>
      {/* ブラウザのタブバー風 */}
      <div
        style={{
          background: '#dee1e6',
          borderRadius: '8px 8px 0 0',
          padding: '8px 8px 0',
          display: 'flex',
          gap: 2,
        }}
      >
        {allTabsTitle.map((title, i) => (
          <div
            key={i}
            style={{
              background: i === 0 ? '#fff' : '#c8ccd2',
              borderRadius: '6px 6px 0 0',
              padding: '6px 10px',
              fontSize: 11,
              color: i === 0 ? '#111' : '#555',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              maxWidth: 140,
              minWidth: 80,
            }}
          >
            <span style={{ fontSize: 12 }}>🌐</span>
            <span
              style={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                flex: 1,
              }}
            >
              {title}
            </span>
            <span style={{ color: '#999', fontSize: 12, flexShrink: 0 }}>×</span>
          </div>
        ))}
        <div
          style={{
            width: 28,
            height: 28,
            display: 'grid',
            placeItems: 'center',
            fontSize: 16,
            color: '#555',
            cursor: 'pointer',
          }}
        >
          +
        </div>
      </div>

      {/* ブラウザ本体（アドレスバー＋コンテンツ） */}
      <div
        style={{
          background: '#fff',
          border: '1px solid #dee1e6',
          borderTop: 'none',
          borderRadius: '0 0 8px 8px',
          padding: '10px 12px',
        }}
      >
        <div
          style={{
            background: '#f1f3f4',
            borderRadius: 20,
            padding: '5px 14px',
            fontSize: 11,
            color: '#555',
            marginBottom: 12,
          }}
        >
          https://admin.example.com/dashboard
        </div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 8,
              background: '#e8eaf6',
              display: 'grid',
              placeItems: 'center',
              fontSize: 16,
              flexShrink: 0,
            }}
          >
            📊
          </div>
          <div>
            <p style={{ margin: 0, fontWeight: 700, fontSize: 13, color: '#111' }}>ダッシュボード</p>
            <p style={{ margin: '3px 0 0', fontSize: 11, color: '#888' }}>今月の集計データを確認できます</p>
          </div>
        </div>
      </div>
    </div>
  )
}
