// カテゴリA：非アクティブなタブ文字が薄すぎてコントラスト不足になっている「bad」パターン。
const TABS = ['ホーム', 'プロダクト', 'ブログ', 'お問い合わせ']

export default function TabNavigationSample({
  activeColor = '#000000',
  inactiveColor = '#B2B2B2',
  backgroundColor = '#FFFFFF',
}) {
  return (
    <div style={{ background: 'var(--color-surface)', padding: '20px 16px' }}>
      <nav
        style={{
          background: backgroundColor,
          borderBottom: '2px solid #e0e0e0',
          display: 'flex',
          gap: 0,
        }}
        aria-label="グローバルナビゲーション"
      >
        {TABS.map((tab, i) => {
          const isActive = i === 0
          return (
            <button
              key={tab}
              type="button"
              style={{
                padding: '12px 18px',
                fontSize: 14,
                fontWeight: isActive ? 700 : 400,
                color: isActive ? activeColor : inactiveColor,
                background: 'none',
                border: 'none',
                borderBottom: isActive ? `3px solid ${activeColor}` : '3px solid transparent',
                marginBottom: -2,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
              aria-current={isActive ? 'page' : undefined}
            >
              {tab}
            </button>
          )
        })}
      </nav>

    </div>
  )
}
