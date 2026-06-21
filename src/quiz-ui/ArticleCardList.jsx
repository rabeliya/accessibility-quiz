// カテゴリD：全カードに「詳細はこちら」という同一文言のボタンが並ぶ記事一覧。
// スクリーンリーダーでリンク一覧を確認したとき、どこへのリンクかが区別できない問題を表す。
const ARTICLES = [
  { title: '2024年のUI/UXデザイントレンド総まとめ', tag: 'デザイン' },
  { title: 'アクセシビリティ対応で売上が30%向上した事例', tag: 'ビジネス' },
  { title: 'Figmaの新機能：Variables完全ガイド', tag: 'ツール' },
]

export default function ArticleCardList({ buttonLabel = '詳細はこちら' }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        padding: '16px',
        background: 'var(--color-surface)',
      }}
    >
      {ARTICLES.map((article, i) => (
        <div
          key={i}
          style={{
            border: '1px solid #e0e0e0',
            borderRadius: 8,
            padding: '12px 14px',
            background: '#fff',
            display: 'flex',
            flexDirection: 'column',
            gap: 6,
          }}
        >
          <span
            style={{
              fontSize: 10,
              color: '#fff',
              background: '#5c6bc0',
              borderRadius: 20,
              padding: '1px 8px',
              alignSelf: 'flex-start',
            }}
          >
            {article.tag}
          </span>
          <p style={{ margin: 0, fontSize: 13, fontWeight: 600, lineHeight: 1.4, color: '#222' }}>
            {article.title}
          </p>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button
              type="button"
              style={{
                fontSize: 12,
                color: '#5c6bc0',
                background: 'none',
                border: '1px solid #5c6bc0',
                borderRadius: 4,
                padding: '3px 10px',
                cursor: 'pointer',
              }}
            >
              {buttonLabel}
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
