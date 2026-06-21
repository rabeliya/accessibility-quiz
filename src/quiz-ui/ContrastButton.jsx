// カテゴリA（カラー&ビジュアル）用の出題UIコンポーネント。
// 実HTML/CSSで描画するため、props で渡された色がブラウザ上で「偽りなく」再現される
// ＝デベロッパーツールや拡張機能で実際のコントラスト比を検証できる、というのが狙い。
export default function ContrastButton({ label = 'ボタン', color = '#000', background = '#fff' }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '32px 16px',
        background: 'var(--color-bg)',
        borderRadius: 'var(--radius)',
      }}
    >
      <button
        type="button"
        // クイズの題材なので押せてもダミー。preventDefault的な振る舞いは不要。
        style={{
          color,
          background,
          border: 'none',
          borderRadius: 8,
          padding: '14px 28px',
          fontSize: 16,
          fontWeight: 600,
        }}
      >
        {label}
      </button>
    </div>
  )
}
