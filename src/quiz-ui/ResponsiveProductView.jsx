// カテゴリC：画面の向きを縦に「固定」してしまったスマホUIの再現。
// isLocked=true のとき「横向きにしても回転しない」状態をモックアップで表現する。
export default function ResponsiveProductView({ isLocked = false }) {
  return (
    <div
      style={{
        display: 'flex',
        gap: 20,
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '20px 16px',
        background: 'var(--color-surface)',
      }}
    >
      {/* 縦向きスマホ */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
        <PhoneFrame portrait>
          <ProductContent />
        </PhoneFrame>
        <span style={{ fontSize: 11, color: 'var(--color-text-sub, #666)' }}>縦向き（通常）</span>
      </div>

      {/* 横向き → ロックされて縦のまま */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
        <div style={{ position: 'relative' }}>
          <PhoneFrame portrait rotated={isLocked}>
            {/* isLocked なのでコンテンツは縦向きのまま（回転しない） */}
            <ProductContent locked={isLocked} />
          </PhoneFrame>
          {isLocked && (
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(0,0,0,0.45)',
                borderRadius: 14,
              }}
            >
              <span style={{ fontSize: 22 }}>🔒</span>
              <span style={{ color: '#fff', fontSize: 11, marginTop: 4, textAlign: 'center', lineHeight: 1.4 }}>
                縦向き固定<br />回転できません
              </span>
            </div>
          )}
        </div>
        <span style={{ fontSize: 11, color: 'var(--color-text-sub, #666)' }}>
          横に傾けても…
        </span>
      </div>
    </div>
  )
}

function PhoneFrame({ children, rotated = false }) {
  return (
    <div
      style={{
        width: 90,
        height: 160,
        border: '3px solid #5b606b',
        borderRadius: 14,
        background: '#fff',
        overflow: 'hidden',
        transform: rotated ? 'rotate(90deg)' : 'none',
        flexShrink: 0,
        position: 'relative',
      }}
    >
      {/* ノッチ */}
      <div
        style={{
          width: 30,
          height: 6,
          background: '#5b606b',
          borderRadius: 3,
          margin: '6px auto 0',
        }}
      />
      {children}
    </div>
  )
}

function ProductContent({ locked = false }) {
  return (
    <div style={{ padding: '6px 6px 4px', fontSize: 9 }}>
      {/* 商品画像プレースホルダー */}
      <div
        style={{
          width: '100%',
          height: 70,
          background: locked ? '#f5f5f5' : 'linear-gradient(135deg, #e8eaf6, #c5cae9)',
          borderRadius: 4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#7986cb',
          fontSize: 18,
          marginBottom: 5,
        }}
      >
        {locked ? '' : '👟'}
      </div>
      <div style={{ fontWeight: 700, lineHeight: 1.3, color: '#222' }}>ランニングシューズ Pro</div>
      <div style={{ color: '#e53935', fontWeight: 700, marginTop: 2 }}>¥12,800</div>
    </div>
  )
}
