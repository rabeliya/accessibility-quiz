// カテゴリA：本文中のリンクを下線なし・色だけで区別する「bad」パターン。
// 色覚多様性のユーザーがどれがリンクか区別できない問題を表す。
export default function InlineLinkSample({
  bodyColor = '#333333',
  linkColor = '#0066CC',
  hasUnderline = false,
}) {
  const linkStyle = {
    color: linkColor,
    textDecoration: hasUnderline ? 'underline' : 'none',
    cursor: 'pointer',
  }

  return (
    <div style={{ background: 'var(--color-surface)', padding: '20px 16px' }}>
      {/* ブログ記事の本文 */}
      <article
        style={{
          background: '#fff',
          border: '1px solid #e0e0e0',
          borderRadius: 8,
          padding: '16px',
          fontSize: 14,
          color: bodyColor,
          lineHeight: 1.8,
        }}
      >
        <h2 style={{ fontSize: 16, fontWeight: 700, marginTop: 0, marginBottom: 8, color: '#111' }}>
          アクセシビリティ改善の第一歩
        </h2>
        <p style={{ margin: 0 }}>
          Webサイトのアクセシビリティを高めるためには、まず
          <span style={linkStyle}>WCAG 2.2の基準</span>
          を理解することが重要です。特にコントラスト比については、
          <span style={linkStyle}>色覚多様性に関するガイドライン</span>
          を参照するとより深く学ぶことができます。また、スクリーンリーダーへの対応も
          <span style={linkStyle}>実装チェックリスト</span>
          にまとめているので、ご活用ください。
        </p>
      </article>

    </div>
  )
}
