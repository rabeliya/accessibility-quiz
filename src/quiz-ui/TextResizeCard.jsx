// カテゴリC：高さ固定のカードに文字サイズ200%を適用すると文字がはみ出すUI。
export default function TextResizeCard({ cardHeight = 200, zoomLevel = '200%' }) {
  const scale = parseFloat(zoomLevel) / 100
  const scaledFont = Math.round(14 * scale)
  const scaledTitle = Math.round(16 * scale)

  return (
    <div style={{ background: 'var(--color-surface)', padding: '16px' }}>
      <p style={{ margin: '0 0 8px', fontSize: 12, color: '#888' }}>
        ブラウザの文字サイズ：{zoomLevel}
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {[
          { q: 'パスワードを忘れた場合はどうすればいいですか？', a: 'ログイン画面の「パスワードを忘れた方はこちら」リンクからパスワードの再設定を行ってください。設定済みのメールアドレスに再設定用のリンクが届きます。' },
          { q: '支払い方法は何が使えますか？', a: 'クレジットカード（Visa / Mastercard / AMEX）、銀行振込、コンビニ払いに対応しています。詳しくは料金ページをご覧ください。' },
        ].map((item, i) => (
          <div
            key={i}
            style={{
              height: cardHeight,
              overflow: 'hidden',
              border: '1px solid #e0e0e0',
              borderRadius: 8,
              padding: '12px 14px',
              background: '#fff',
              position: 'relative',
            }}
          >
            <p style={{ margin: '0 0 8px', fontWeight: 700, fontSize: scaledTitle, color: '#111', lineHeight: 1.4 }}>
              Q. {item.q}
            </p>
            <p style={{ margin: 0, fontSize: scaledFont, color: '#444', lineHeight: 1.7 }}>
              {item.a}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
