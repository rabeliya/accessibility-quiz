// カテゴリC：横画面スマホで上下の固定ヘッダー・フッターがコンテンツ領域を圧迫するUI。
export default function StickyHeaderLandscape({ headerHeight = 80, footerHeight = 60 }) {
  const totalFixed = headerHeight + footerHeight
  const phoneH = 180
  const phoneW = 320
  const contentH = phoneH - totalFixed
  const contentRatio = Math.round((contentH / phoneH) * 100)

  return (
    <div style={{ background: 'var(--color-surface)', padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
      <p style={{ margin: 0, fontSize: 12, color: '#888' }}>横向きスマートフォン（ランドスケープ）</p>

      {/* スマホ横向きフレーム */}
      <div
        style={{
          width: phoneW,
          height: phoneH,
          border: '3px solid #5b606b',
          borderRadius: 14,
          overflow: 'hidden',
          position: 'relative',
          background: '#f9f9f9',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* 固定ヘッダー */}
        <div
          style={{
            height: headerHeight,
            background: '#5c6bc0',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 12px',
          }}
        >
          <span style={{ color: '#fff', fontWeight: 700, fontSize: 13 }}>BRAND</span>
          <div style={{ display: 'flex', gap: 10 }}>
            {['ホーム', 'サービス', 'ブログ', 'お問い合わせ'].map(t => (
              <span key={t} style={{ color: 'rgba(255,255,255,0.85)', fontSize: 10 }}>{t}</span>
            ))}
          </div>
          <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: 18 }}>☰</span>
        </div>

        {/* コンテンツエリア（わずかな隙間） */}
        <div
          style={{
            flex: 1,
            overflow: 'hidden',
            padding: '4px 10px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: 10,
              color: '#333',
              lineHeight: 1.5,
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitLineClamp: Math.max(1, Math.floor(contentH / 16)),
              WebkitBoxOrient: 'vertical',
            }}
          >
            ここに記事の本文が入ります。上下の固定バーで挟まれたコンテンツエリアは縦に{contentRatio}%しか残っていません。長い文章はほとんど表示できず、スクロールしても少しずつしか読み進められません。
          </p>
        </div>

        {/* 固定フッター */}
        <div
          style={{
            height: footerHeight,
            background: '#fff',
            borderTop: '1px solid #e0e0e0',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            padding: '0 8px',
          }}
        >
          {['🏠', '🔍', '❤️', '👤'].map((icon, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
              <span style={{ fontSize: 16 }}>{icon}</span>
              <span style={{ fontSize: 8, color: '#888' }}>メニュー</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
