// カテゴリB：スクロール連動の激しいパララックスアニメーションUI。
// prefers-reduced-motion を無視して常に動き続ける「bad」パターンを再現する。
const STYLES = `
  @keyframes parallax-bg-drift {
    0%   { transform: translateY(0px) scale(1.15); }
    50%  { transform: translateY(-28px) scale(1.15); }
    100% { transform: translateY(0px) scale(1.15); }
  }
  @keyframes parallax-fg-drift {
    0%   { transform: translateY(0px); }
    50%  { transform: translateY(-14px); }
    100% { transform: translateY(0px); }
  }
  @keyframes parallax-badge {
    0%   { transform: translateY(0px) rotate(-3deg); }
    50%  { transform: translateY(-10px) rotate(3deg); }
    100% { transform: translateY(0px) rotate(-3deg); }
  }
`

export default function ParallaxHeroView() {
  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        height: 200,
        background: 'linear-gradient(135deg, #1a237e 0%, #283593 60%, #0d47a1 100%)',
        borderRadius: 8,
      }}
    >
      <style>{STYLES}</style>

      {/* 背景レイヤー：ゆっくり大きく動く */}
      <div
        style={{
          position: 'absolute',
          inset: '-20px',
          animation: 'parallax-bg-drift 4s ease-in-out infinite',
          background:
            'radial-gradient(circle at 30% 40%, rgba(255,255,255,0.07) 0%, transparent 60%), ' +
            'radial-gradient(circle at 70% 70%, rgba(255,255,255,0.05) 0%, transparent 50%)',
        }}
      />

      {/* 中間レイヤー：幾何学的な図形が流れる */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          animation: 'parallax-fg-drift 3s ease-in-out infinite',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 24,
            left: 20,
            width: 80,
            height: 80,
            borderRadius: '50%',
            border: '2px solid rgba(255,255,255,0.15)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 20,
            right: 30,
            width: 50,
            height: 50,
            border: '2px solid rgba(255,255,255,0.1)',
            transform: 'rotate(45deg)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 60,
            right: 60,
            width: 30,
            height: 30,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.08)',
          }}
        />
      </div>

      {/* 前景レイヤー：キャッチコピー。さらに速く動く */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          animation: 'parallax-badge 2.5s ease-in-out infinite',
        }}
      >
        <p style={{ color: '#fff', fontWeight: 700, fontSize: 18, margin: 0, textAlign: 'center' }}>
          Our Brand Story
        </p>
        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 13, margin: '6px 0 0', textAlign: 'center' }}>
          スクロールにあわせて背景が視差効果で動くデザイン
        </p>
      </div>

      {/* ラベル：アニメーション中であることを明示 */}
      <span
        style={{
          position: 'absolute',
          top: 10,
          right: 10,
          background: 'rgba(0,0,0,0.55)',
          color: '#fff',
          fontSize: 11,
          padding: '2px 8px',
          borderRadius: 20,
        }}
      >
        ▶ 再生中
      </span>
    </div>
  )
}
