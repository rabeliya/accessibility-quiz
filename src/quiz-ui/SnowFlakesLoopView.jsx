// カテゴリB：背景全体で雪が無限ループする装飾アニメーションUI。停止手段なし。
const FLAKES = [
  { left: '8%',  size: 14, delay: '0s',    dur: '4s' },
  { left: '18%', size: 10, delay: '0.8s',  dur: '5s' },
  { left: '30%', size: 18, delay: '0.3s',  dur: '3.5s' },
  { left: '42%', size: 11, delay: '1.5s',  dur: '4.5s' },
  { left: '55%', size: 16, delay: '0.1s',  dur: '4s' },
  { left: '66%', size: 9,  delay: '1.1s',  dur: '5.5s' },
  { left: '76%', size: 13, delay: '0.6s',  dur: '3.8s' },
  { left: '88%', size: 12, delay: '2s',    dur: '4.2s' },
  { left: '24%', size: 8,  delay: '2.5s',  dur: '5s' },
  { left: '61%', size: 10, delay: '1.8s',  dur: '4.8s' },
]

const STYLES = `
  @keyframes snow-fall {
    0%   { transform: translateY(-20px) rotate(0deg); opacity: 0; }
    10%  { opacity: 1; }
    90%  { opacity: 1; }
    100% { transform: translateY(210px) rotate(360deg); opacity: 0; }
  }
`

export default function SnowFlakesLoopView() {
  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        height: 180,
        background: 'linear-gradient(180deg, #1a237e 0%, #283593 50%, #1565c0 100%)',
        borderRadius: 8,
      }}
    >
      <style>{STYLES}</style>

      {/* 雪 */}
      {FLAKES.map((f, i) => (
        <span
          key={i}
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: 0,
            left: f.left,
            fontSize: f.size,
            animation: `snow-fall ${f.dur} ${f.delay} ease-in infinite`,
            userSelect: 'none',
          }}
        >
          ❄
        </span>
      ))}

      {/* コンテンツ */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 6,
        }}
      >
        <p style={{ margin: 0, color: '#fff', fontSize: 20, fontWeight: 700 }}>Winter Campaign</p>
        <p style={{ margin: 0, color: 'rgba(255,255,255,0.75)', fontSize: 13 }}>
          特別割引を今すぐチェック
        </p>
        <button
          type="button"
          style={{
            marginTop: 8,
            padding: '7px 20px',
            background: '#fff',
            color: '#1a237e',
            border: 'none',
            borderRadius: 20,
            fontWeight: 700,
            fontSize: 13,
            cursor: 'pointer',
          }}
        >
          詳しく見る
        </button>
      </div>
    </div>
  )
}
