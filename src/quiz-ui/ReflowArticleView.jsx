// カテゴリC：デスクトップ固定幅レイアウトが320px相当の狭い幅で横スクロールを発生させるUI。
export default function ReflowArticleView({ layout = 'fixed-desktop', viewportWidth = 320 }) {
  const isFixed = layout === 'fixed-desktop'
  const contentWidth = isFixed ? 680 : '100%'

  return (
    <div
      style={{
        background: 'var(--color-surface)',
        padding: '16px',
      }}
    >
      <p style={{ margin: '0 0 8px', fontSize: 12, color: '#888' }}>
        表示幅：{viewportWidth}px 相当（400%拡大時）
      </p>

      {/* 狭い擬似ビューポート */}
      <div
        style={{
          width: '100%',
          maxWidth: 320,
          overflowX: isFixed ? 'auto' : 'hidden',
          border: '2px solid #bbb',
          borderRadius: 6,
          background: '#fff',
          position: 'relative',
        }}
      >
        <div style={{ width: contentWidth, padding: '12px' }}>
          {/* ナビゲーション */}
          <div style={{ display: 'flex', gap: 12, marginBottom: 12, borderBottom: '1px solid #eee', paddingBottom: 8 }}>
            {['ホーム', 'ニュース', '経済', 'テック', 'スポーツ'].map(t => (
              <span key={t} style={{ fontSize: 12, color: '#5c6bc0', whiteSpace: 'nowrap' }}>{t}</span>
            ))}
          </div>

          {/* 記事本文（2カラム） */}
          <div style={{ display: 'flex', gap: 16 }}>
            <div style={{ flex: '0 0 320px' }}>
              <p style={{ margin: '0 0 6px', fontWeight: 700, fontSize: 14, color: '#111', lineHeight: 1.4 }}>
                テクノロジー企業が新しいAIツールを発表
              </p>
              <p style={{ margin: 0, fontSize: 12, color: '#444', lineHeight: 1.7 }}>
                先週末に開催されたカンファレンスにて、複数の大手テクノロジー企業が次世代の人工知能ツールを一斉に発表し、業界に大きな話題を呼んでいます。専門家たちは、今回の発表が今後の業界標準に大きく影響を与えると分析しています。
              </p>
            </div>
            <div style={{ flex: '0 0 280px' }}>
              <div style={{ height: 80, background: 'linear-gradient(135deg, #e8eaf6, #c5cae9)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>
                <span style={{ fontSize: 28 }}>🤖</span>
              </div>
              <p style={{ margin: 0, fontSize: 11, color: '#888' }}>写真：カンファレンス会場の様子</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
