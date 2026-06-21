// カテゴリA：複数系列の折れ線グラフ。線の区別が「色だけ」で、凡例が右に離れている状態を再現。
// 色覚多様性のユーザーが「どの線がどの製品か」を凡例とマッチングできない問題を見せる出題UI。
//
// サンプルデータは線同士が交差するよう意図的に作ってある（区別の難しさを体感させるため）。
const SAMPLE_SERIES = [
  [40, 90, 55, 120, 80],
  [70, 50, 110, 60, 130],
  [110, 75, 70, 100, 45],
]

const W = 260
const H = 170
const PAD = 16
const STEPS = 5

function toPoints(values) {
  const max = 140
  const stepX = (W - PAD * 2) / (STEPS - 1)
  return values
    .map((v, i) => {
      const x = PAD + stepX * i
      const y = H - PAD - ((H - PAD * 2) * v) / max
      return `${x.toFixed(1)},${y.toFixed(1)}`
    })
    .join(' ')
}

export default function LineChartSample({ lines = [] }) {
  return (
    <div
      style={{
        display: 'flex',
        gap: 24,
        alignItems: 'center',
        padding: '20px 16px',
        background: 'var(--color-surface)',
      }}
    >
      <svg
        viewBox={`0 0 ${W} ${H}`}
        style={{ flex: '1 1 auto', maxWidth: W }}
        role="img"
        aria-label="製品カテゴリ別の売上推移の折れ線グラフ"
      >
        {/* 簡易の軸 */}
        <line x1={PAD} y1={H - PAD} x2={W - PAD} y2={H - PAD} stroke="#d7dae0" strokeWidth="1" />
        <line x1={PAD} y1={PAD} x2={PAD} y2={H - PAD} stroke="#d7dae0" strokeWidth="1" />
        {lines.map((ln, i) => (
          <polyline
            key={i}
            points={toPoints(SAMPLE_SERIES[i % SAMPLE_SERIES.length])}
            fill="none"
            stroke={ln.color}
            strokeWidth="2.5"
          />
        ))}
      </svg>

      {/* 凡例：本体から離して配置（色の正方形＋ラベルのみ） */}
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {lines.map((ln, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13 }}>
            <span
              style={{ width: 14, height: 14, background: ln.color, borderRadius: 2, flex: 'none' }}
            />
            {ln.label}
          </li>
        ))}
      </ul>
    </div>
  )
}
