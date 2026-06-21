// カテゴリE：文中に短いテキストを挟んで2つのリンクが並ぶインラインリンクUI。
export default function InlineLinkSpacing({ fontSize = 14, textBetween = 'および' }) {
  return (
    <div style={{ background: 'var(--color-surface)', padding: '16px' }}>
      <div
        style={{
          background: '#fff',
          border: '1px solid #e0e0e0',
          borderRadius: 8,
          padding: '20px 16px',
        }}
      >
        {/* フッター風のテキストエリア */}
        <div
          style={{
            padding: '14px 16px',
            background: '#f9f9f9',
            borderRadius: 6,
            border: '1px solid #eee',
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize,
              color: '#444',
              lineHeight: 1.7,
              textAlign: 'center',
            }}
          >
            本サービスを利用することで、当社の
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              style={{ color: '#1565c0', textDecoration: 'underline' }}
            >
              プライバシーポリシー
            </a>
            {textBetween ? ` ${textBetween} ` : ''}
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              style={{ color: '#1565c0', textDecoration: 'underline' }}
            >
              利用規約
            </a>
            に同意したものとみなされます。
          </p>
        </div>
      </div>
    </div>
  )
}
