// カテゴリA：写真の上に直接白文字を乗せるとコントラストが保証できない「bad」パターン。
// hasOverlay=false のとき、写真の明るい部分（空や雲）と白文字が溶け込む状態を再現する。
export default function PhotoOverlayCard({ textColor = '#FFFFFF', hasOverlay = false }) {
  return (
    <div style={{ background: 'var(--color-surface)', padding: '20px 16px' }}>
      <div
        style={{
          position: 'relative',
          borderRadius: 10,
          overflow: 'hidden',
          height: 180,
        }}
      >
        {/* 疑似写真：ビーチのグラデーション（上が明るい空、下が海） */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, #E8F4FD 0%, #B3D9F5 25%, #7EC8E3 50%, #1A8FC1 75%, #0E6FA0 100%)',
          }}
        />

        {/* 写真内の「雲」要素（白い部分 → 白文字が溶け込む） */}
        <div style={{ position: 'absolute', top: 18, left: 24 }}>
          <Cloud size={60} opacity={0.9} />
        </div>
        <div style={{ position: 'absolute', top: 10, right: 30 }}>
          <Cloud size={45} opacity={0.85} />
        </div>
        <div style={{ position: 'absolute', top: 30, left: 100 }}>
          <Cloud size={35} opacity={0.75} />
        </div>

        {/* オーバーレイ（hasOverlay=true のときだけ有効） */}
        {hasOverlay && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.6) 100%)',
            }}
          />
        )}

        {/* テキスト */}
        <div
          style={{
            position: 'absolute',
            bottom: 16,
            left: 16,
            right: 16,
          }}
        >
          <p
            style={{
              margin: 0,
              color: textColor,
              fontSize: 18,
              fontWeight: 700,
              lineHeight: 1.3,
              textShadow: 'none',
            }}
          >
            沖縄 3泊4日の旅
          </p>
          <p style={{ margin: '4px 0 0', color: textColor, fontSize: 13, opacity: 0.9 }}>
            ¥89,800 〜 ／おひとり様
          </p>
        </div>
      </div>

    </div>
  )
}

function Cloud({ size = 50, opacity = 0.9 }) {
  return (
    <div style={{ position: 'relative', width: size, height: size * 0.55, opacity }}>
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '60%',
          background: '#fff',
          borderRadius: size * 0.2,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '15%',
          width: '45%',
          height: '75%',
          background: '#fff',
          borderRadius: '50%',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '40%',
          width: '38%',
          height: '65%',
          background: '#fff',
          borderRadius: '50%',
        }}
      />
    </div>
  )
}
