// カテゴリB：背景が激しく明滅するサイバーパンク風エフェクトUI。
// 注：デモのフラッシュ速度はWCAGの閾値（3回/秒）を超えないよう抑えてある。
const STYLES = `
  @keyframes neon-flash-main {
    0%, 100% { opacity: 1; }
    45%       { opacity: 1; }
    50%       { opacity: 0.1; }
    55%       { opacity: 1; }
  }
  @keyframes neon-flash-side {
    0%, 100% { opacity: 0.7; }
    20%       { opacity: 0.7; }
    25%       { opacity: 0.05; }
    30%       { opacity: 0.7; }
    70%       { opacity: 0.7; }
    75%       { opacity: 0.05; }
    80%       { opacity: 0.7; }
  }
  @keyframes neon-text-flicker {
    0%, 100% { text-shadow: 0 0 8px #ff00ff, 0 0 20px #ff00ff, 0 0 40px #ff00ff; }
    50%       { text-shadow: 0 0 2px #ff00ff; }
  }
`

export default function FlashingNeonBackground() {
  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        height: 180,
        background: '#0a0a0f',
        borderRadius: 8,
      }}
    >
      <style>{STYLES}</style>

      {/* 明滅するネオン背景レイヤー */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          animation: 'neon-flash-main 0.7s step-end infinite',
          background: 'radial-gradient(ellipse at 30% 50%, rgba(255,0,255,0.35) 0%, transparent 60%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          animation: 'neon-flash-side 0.9s step-end infinite',
          background: 'radial-gradient(ellipse at 75% 40%, rgba(0,255,255,0.3) 0%, transparent 55%)',
        }}
      />

      {/* ネオングリッド線 */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(0,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.07) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      {/* テキスト */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
        }}
      >
        <p
          style={{
            margin: 0,
            color: '#ff00ff',
            fontSize: 22,
            fontWeight: 900,
            letterSpacing: '0.15em',
            animation: 'neon-text-flicker 0.7s step-end infinite',
          }}
        >
          CYBER LAUNCH
        </p>
        <p style={{ margin: 0, color: 'rgba(0,255,255,0.8)', fontSize: 12, letterSpacing: '0.25em' }}>
          NEW PRODUCT 2025
        </p>
      </div>
    </div>
  )
}
