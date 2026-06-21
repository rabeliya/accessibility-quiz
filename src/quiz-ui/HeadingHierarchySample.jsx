// カテゴリD：見た目のサイズ都合で見出し階層をスキップ・逆転させたUI。
const SIZE_MAP = { 1: 22, 2: 18, 3: 15, 4: 13, 5: 12, 6: 11 }
const WEIGHT_MAP = { 1: 800, 2: 700, 3: 700, 4: 600, 5: 600, 6: 500 }
const INDENT_MAP = { 1: 0, 2: 0, 3: 12, 4: 24, 5: 36, 6: 48 }

export default function HeadingHierarchySample({ structure = [] }) {
  return (
    <div style={{ background: 'var(--color-surface)', padding: '16px' }}>
      <div
        style={{
          background: '#fff',
          border: '1px solid #e0e0e0',
          borderRadius: 8,
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
        }}
      >
        {structure.map((item, i) => {
          const Tag = `h${item.level}`
          return (
            <div
              key={i}
              style={{
                paddingLeft: item.level >= 3 ? INDENT_MAP[item.level] + 8 : INDENT_MAP[item.level],
                borderLeft: item.level >= 3 ? `3px solid ${item.level === 4 ? '#ef9a9a' : '#90caf9'}` : 'none',
              }}
            >
              <Tag
                style={{
                  margin: 0,
                  fontSize: SIZE_MAP[item.level],
                  fontWeight: WEIGHT_MAP[item.level],
                  color: '#111',
                  lineHeight: 1.4,
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    fontSize: 10,
                    fontWeight: 400,
                    color: '#999',
                    marginRight: 6,
                    verticalAlign: 'middle',
                    background: '#f5f5f5',
                    padding: '1px 5px',
                    borderRadius: 3,
                  }}
                >
                  H{item.level}
                </span>
                {item.text}
              </Tag>
            </div>
          )
        })}
      </div>
    </div>
  )
}
