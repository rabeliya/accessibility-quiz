// カテゴリC：ページ本文はリフローしつつ、テーブルだけ横スクロールを許容する「good」パターン。
const HEADERS = ['ID', '担当者', '案件名', '期日', 'ステータス', '優先度', '工数']
const ROWS = [
  ['#001', '田中', 'LP改修', '6/30', '進行中', '高', '12h'],
  ['#002', '鈴木', 'API連携', '7/15', '未着手', '中', '20h'],
  ['#003', '山田', 'DB移行', '7/01', '完了', '高', '8h'],
]

export default function DataTableReflow({ contentType = 'table', allowHorizontalScroll = true }) {
  return (
    <div style={{ background: 'var(--color-surface)', padding: '16px' }}>
      {/* 狭い擬似ビューポート */}
      <div style={{ maxWidth: 320, border: '2px solid #bbb', borderRadius: 6, overflow: 'hidden', background: '#fff' }}>
        {/* 通常のテキストはリフロー（縦に折り返す） */}
        <div style={{ padding: '10px 12px', borderBottom: '1px solid #eee' }}>
          <p style={{ margin: '0 0 4px', fontWeight: 700, fontSize: 13, color: '#111' }}>
            案件一覧
          </p>
          <p style={{ margin: 0, fontSize: 11, color: '#666', lineHeight: 1.6 }}>
            現在対応中の案件です。下のテーブルで詳細を確認してください。テキストはリフロー（折り返し）しています。
          </p>
        </div>

        {/* テーブルだけ横スクロール */}
        <div
          style={{
            overflowX: allowHorizontalScroll ? 'auto' : 'hidden',
            padding: '8px 0',
          }}
        >
          <table
            style={{
              borderCollapse: 'collapse',
              fontSize: 11,
              whiteSpace: 'nowrap',
              width: '100%',
            }}
          >
            <thead>
              <tr>
                {HEADERS.map(h => (
                  <th
                    key={h}
                    style={{
                      padding: '5px 10px',
                      background: '#e8eaf6',
                      color: '#333',
                      fontWeight: 700,
                      textAlign: 'left',
                      borderBottom: '2px solid #c5cae9',
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#f9f9ff' }}>
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      style={{
                        padding: '5px 10px',
                        color: '#333',
                        borderBottom: '1px solid #eee',
                      }}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
