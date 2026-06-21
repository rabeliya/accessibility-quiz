// カテゴリC：見出しをPNG画像として配置したUI。拡大時にボケる様子を再現。
// CSS filter: blur でラスター画像特有のぼやけを疑似的に表現する。
export default function ImageOfTextSample({ isImage = true, zoomLevel = '300%' }) {
  const scale = parseFloat(zoomLevel) / 100
  const blur = isImage ? Math.max(0, (scale - 1.5) * 1.4) : 0

  return (
    <div style={{ background: 'var(--color-surface)', padding: '20px 16px' }}>
      <p style={{ margin: '0 0 12px', fontSize: 12, color: '#888' }}>
        ブラウザのズームレベル：{zoomLevel}
      </p>

      <div style={{ background: '#fff', border: '1px solid #e0e0e0', borderRadius: 8, padding: '16px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {/* 画像として配置された見出し */}
        <div
          style={{
            background: 'linear-gradient(135deg, #1a237e, #283593)',
            borderRadius: 6,
            padding: '16px 20px',
            filter: blur > 0 ? `blur(${blur}px)` : 'none',
            position: 'relative',
          }}
        >
          {/* PNG画像っぽいピクセル質感をCSSで演出 */}
          {isImage && blur > 0.3 && (
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage:
                  'repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 3px)',
                borderRadius: 6,
              }}
            />
          )}
          <p
            style={{
              margin: 0,
              color: '#fff',
              fontSize: 20,
              fontWeight: 900,
              letterSpacing: '0.08em',
              fontFamily: 'serif',
              position: 'relative',
            }}
          >
            春の新作コレクション 2025
          </p>
          <p
            style={{
              margin: '4px 0 0',
              color: 'rgba(255,255,255,0.7)',
              fontSize: 12,
              fontFamily: 'serif',
              position: 'relative',
            }}
          >
            Spring New Collection
          </p>
        </div>

        {/* 本文テキスト（こちらはフォントのまま） */}
        <p style={{ margin: 0, fontSize: 13, color: '#444', lineHeight: 1.7 }}>
          今シーズンの新作アイテムが続々入荷しています。上のバナー見出しは画像（PNG）として書き出されており、
          ズームするとフォントと異なるにじみ方をします。
        </p>
      </div>
    </div>
  )
}
