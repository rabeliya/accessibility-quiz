import { useState } from 'react'

// カテゴリB：リアクションボタンを押すと画面全体にパーティクルが飛ぶエフェクトUI。
const PARTICLES = ['⭐', '💖', '✨', '🎉', '💫', '🌟', '❤️', '🎊']

const STYLES = `
  @keyframes particle-burst {
    0%   { transform: translate(0, 0) scale(1); opacity: 1; }
    100% { transform: translate(var(--tx), var(--ty)) scale(0.3); opacity: 0; }
  }
`

function randomBetween(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a
}

export default function ReactionEffectView({ animationScale = 'fullscreen' }) {
  const [particles, setParticles] = useState([])
  const [liked, setLiked] = useState(false)

  const handleReaction = () => {
    setLiked(true)
    const count = animationScale === 'fullscreen' ? 20 : 8
    const newParticles = Array.from({ length: count }, (_, i) => ({
      id: Date.now() + i,
      icon: PARTICLES[i % PARTICLES.length],
      tx: randomBetween(-160, 160),
      ty: randomBetween(-120, -20),
      left: randomBetween(30, 70),
    }))
    setParticles(newParticles)
    setTimeout(() => setParticles([]), 1200)
    setTimeout(() => setLiked(false), 2000)
  }

  return (
    <div style={{ background: 'var(--color-surface)', padding: '16px', position: 'relative', overflow: 'hidden' }}>
      <style>{STYLES}</style>

      {/* チャットメッセージのモック */}
      <div style={{ background: '#fff', border: '1px solid #e0e0e0', borderRadius: 10, padding: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 12 }}>
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#c5cae9', display: 'grid', placeItems: 'center', fontWeight: 700, fontSize: 13, flexShrink: 0 }}>田</div>
          <div>
            <p style={{ margin: 0, fontSize: 12, color: '#888', marginBottom: 3 }}>田中さん</p>
            <div style={{ background: '#f3f4f6', borderRadius: '4px 12px 12px 12px', padding: '8px 12px', fontSize: 13, color: '#222' }}>
              新機能のデモ、とても良かったです！🚀
            </div>
          </div>
        </div>

        {/* リアクションエリア */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button
            type="button"
            onClick={handleReaction}
            style={{
              padding: '5px 14px',
              border: `1px solid ${liked ? '#e57373' : '#e0e0e0'}`,
              borderRadius: 20,
              background: liked ? '#fff8f8' : '#fff',
              cursor: 'pointer',
              fontSize: 14,
              display: 'flex',
              alignItems: 'center',
              gap: 5,
              transition: 'all 0.15s',
            }}
          >
            <span>{liked ? '❤️' : '🤍'}</span>
            <span style={{ fontSize: 12, color: '#666' }}>12</span>
          </button>
          <button
            type="button"
            onClick={handleReaction}
            style={{ padding: '5px 14px', border: '1px solid #e0e0e0', borderRadius: 20, background: '#fff', cursor: 'pointer', fontSize: 14 }}
          >
            👍
          </button>
          <button
            type="button"
            onClick={handleReaction}
            style={{ padding: '5px 14px', border: '1px solid #e0e0e0', borderRadius: 20, background: '#fff', cursor: 'pointer', fontSize: 14 }}
          >
            🎉
          </button>
        </div>
      </div>

      {/* パーティクルエフェクト */}
      {particles.map(p => (
        <span
          key={p.id}
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: 40,
            left: `${p.left}%`,
            fontSize: 20,
            animation: 'particle-burst 1s ease-out forwards',
            '--tx': `${p.tx}px`,
            '--ty': `${p.ty}px`,
            pointerEvents: 'none',
            zIndex: 20,
          }}
        >
          {p.icon}
        </span>
      ))}

      <p style={{ textAlign: 'center', fontSize: 12, color: '#888', marginTop: 10 }}>
        リアクションボタンを押してみてください
      </p>
    </div>
  )
}
