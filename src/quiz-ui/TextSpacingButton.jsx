// カテゴリC：固定サイズのボタンにカスタム文字間隔を適用するとテキストが崩れるUI。
export default function TextSpacingButton({ width = 120, height = 40, applyCustomSpacing = true }) {
  const spacing = applyCustomSpacing
    ? { letterSpacing: '0.18em', wordSpacing: '0.25em', lineHeight: 2.0 }
    : {}

  return (
    <div style={{ background: 'var(--color-surface)', padding: '20px 16px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'center' }}>
        {/* アカウント削除ボタン（固定サイズ） */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'center', width: '100%' }}>
          <p style={{ margin: 0, fontSize: 12, color: '#888' }}>
            {applyCustomSpacing ? 'ユーザーが文字間隔を拡大した状態' : '通常の状態'}
          </p>
          <button
            type="button"
            style={{
              width,
              height,
              overflow: 'hidden',
              background: '#fff',
              border: '1px solid #e53935',
              borderRadius: 6,
              color: '#e53935',
              fontSize: 13,
              fontWeight: 600,
              cursor: 'pointer',
              padding: '0 10px',
              ...spacing,
            }}
          >
            アカウント削除
          </button>
        </div>

        {/* 送信ボタンも同様に崩れる */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'center', width: '100%' }}>
          <button
            type="button"
            style={{
              width: width + 20,
              height,
              overflow: 'hidden',
              background: '#5c6bc0',
              border: 'none',
              borderRadius: 6,
              color: '#fff',
              fontSize: 13,
              fontWeight: 600,
              cursor: 'pointer',
              padding: '0 10px',
              ...spacing,
            }}
          >
            設定を保存する
          </button>
        </div>
      </div>
    </div>
  )
}
