// カテゴリD：画面をまたぐとナビゲーションの並び順が変わってしまうUI。
export default function ConsistentNaviSample({
  page1Order = ['ホーム', 'マイページ', 'お知らせ', 'ヘルプ'],
  page2Order = ['マイページ', 'ホーム', 'ヘルプ', 'お知らせ'],
}) {
  return (
    <div style={{ background: 'var(--color-surface)', padding: '16px', display: 'flex', flexDirection: 'column', gap: 12 }}>
      {[
        { label: '画面①（トップページ）', order: page1Order, active: 'ホーム' },
        { label: '画面②（検索結果）', order: page2Order, active: 'マイページ' },
      ].map(({ label, order, active }) => (
        <div key={label}>
          <p style={{ margin: '0 0 6px', fontSize: 11, color: '#888' }}>{label}</p>
          <div
            style={{
              background: '#fff',
              border: '1px solid #e0e0e0',
              borderRadius: 8,
              overflow: 'hidden',
            }}
          >
            <nav
              style={{
                background: '#5c6bc0',
                display: 'flex',
                padding: '0 12px',
              }}
            >
              {order.map((item) => (
                <button
                  key={item}
                  type="button"
                  style={{
                    padding: '10px 12px',
                    fontSize: 12,
                    color: item === active ? '#fff' : 'rgba(255,255,255,0.7)',
                    background: 'none',
                    border: 'none',
                    borderBottom: item === active ? '2px solid #fff' : '2px solid transparent',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {item}
                </button>
              ))}
            </nav>
            <div style={{ padding: '10px 14px', height: 36, background: '#fafafa' }} />
          </div>
        </div>
      ))}
    </div>
  )
}
