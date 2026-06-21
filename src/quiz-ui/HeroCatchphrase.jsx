// カテゴリA：大きな太字テキスト（24px以上）のコントラスト判定を問う「good」パターン。
export default function HeroCatchphrase({
  fontSize = 32,
  fontWeight = 'bold',
  textColor = '#808080',
  backgroundColor = '#FFFFFF',
}) {
  const isBold = fontWeight === 'bold' || Number(fontWeight) >= 700

  return (
    <div
      style={{
        background: 'var(--color-surface)',
        padding: '20px 16px',
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
      }}
    >
      {/* ヒーローセクションのモック */}
      <div
        style={{
          background: backgroundColor,
          borderRadius: 10,
          padding: '28px 20px',
          textAlign: 'center',
          border: '1px solid #e0e0e0',
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize,
            fontWeight,
            color: textColor,
            lineHeight: 1.3,
          }}
        >
          世界をつなぐ、<br />新しい体験を。
        </p>
        <p
          style={{
            margin: '12px 0 0',
            fontSize: 14,
            color: '#555',
            fontWeight: 400,
          }}
        >
          サービスの価値を伝えるサブコピーが入ります
        </p>
      </div>

      {/* コントラスト比の情報のみ表示（合否判定は出さない） */}
      <div
        style={{
          padding: '8px 12px',
          background: '#f5f5f5',
          border: '1px solid #e0e0e0',
          borderRadius: 6,
          fontSize: 12,
          color: '#555',
          lineHeight: 1.5,
        }}
      >
        テキスト色 <strong>{textColor}</strong>（{fontSize}px {isBold ? '太字' : '通常'}）・コントラスト比 約 3.95:1
      </div>
    </div>
  )
}
