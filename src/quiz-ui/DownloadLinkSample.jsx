// カテゴリD：同一文言「PDFをダウンロード」が複数並んでリンクの目的が区別できないUI。
const REPORTS = [
  { year: '2025年度', title: '第1四半期 決算短信', size: '1.2MB' },
  { year: '2024年度', title: '通期 決算短信', size: '2.8MB' },
  { year: '2023年度', title: '通期 決算短信', size: '2.5MB' },
]

export default function DownloadLinkSample({ commonLabel = 'PDFをダウンロード', count = 3 }) {
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
        <div style={{ padding: '12px 14px', borderBottom: '1px solid #eee', background: '#f9f9f9' }}>
          <p style={{ margin: 0, fontSize: 14, fontWeight: 700, color: '#111' }}>決算短信一覧</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {REPORTS.slice(0, count).map((report, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 14px',
                borderBottom: i < count - 1 ? '1px solid #f0f0f0' : 'none',
              }}
            >
              <div>
                <p style={{ margin: 0, fontSize: 13, fontWeight: 600, color: '#111' }}>
                  {report.year} {report.title}
                </p>
                <p style={{ margin: '2px 0 0', fontSize: 11, color: '#999' }}>PDF / {report.size}</p>
              </div>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                style={{
                  fontSize: 12,
                  color: '#1565c0',
                  textDecoration: 'underline',
                  whiteSpace: 'nowrap',
                  marginLeft: 12,
                  flexShrink: 0,
                }}
              >
                📄 {commonLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
