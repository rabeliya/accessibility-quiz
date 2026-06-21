// カテゴリB：タイムライン上の動画が自動再生され、個別の停止ボタンがないUI。
// グローバルミュートはあるが、個々の動画ごとに停止する手段がない状態を表す。
const POSTS = [
  { user: '山田', initial: '山', topic: '新製品レビュー', isVideo: false, text: '今日発表された新しいワイヤレスイヤホン、音質が素晴らしいですね。' },
  { user: '鈴木', initial: '鈴', topic: 'テック動画', isVideo: true, duration: '0:45' },
  { user: '田中', initial: '田', topic: 'お知らせ', isVideo: false, text: '来週のミートアップ、参加者を募集中です！' },
  { user: '佐藤', initial: '佐', topic: 'デモ動画', isVideo: true, duration: '1:12' },
]

const STYLES = `
  @keyframes video-play-indicator {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0.4; }
  }
`

export default function TimelineVideoFeed({ autoPlay = true, hasGlobalMute = true, hasIndividualStopButton = false }) {
  return (
    <div style={{ background: 'var(--color-surface)', padding: '16px' }}>
      <style>{STYLES}</style>

      {/* グローバルミュートボタン */}
      {hasGlobalMute && (
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 10 }}>
          <button
            type="button"
            style={{ fontSize: 11, padding: '3px 10px', border: '1px solid #ccc', borderRadius: 4, background: '#fff', cursor: 'pointer', color: '#555' }}
          >
            🔇 全体をミュート
          </button>
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {POSTS.map((post, i) => (
          <div key={i} style={{ background: '#fff', border: '1px solid #e0e0e0', borderRadius: 10, overflow: 'hidden' }}>
            {/* 投稿ヘッダー */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 12px 6px' }}>
              <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#c5cae9', display: 'grid', placeItems: 'center', fontWeight: 700, fontSize: 11, flexShrink: 0 }}>
                {post.initial}
              </div>
              <span style={{ fontWeight: 600, fontSize: 12, color: '#222' }}>{post.user}さん</span>
              <span style={{ fontSize: 11, color: '#999', marginLeft: 'auto' }}>3分前</span>
            </div>

            {post.isVideo ? (
              /* 動画カード：自動再生中、個別停止ボタンなし */
              <div style={{ position: 'relative', height: 80, background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #1a1a2e, #16213e)', opacity: 0.9 }} />
                <div style={{ position: 'relative', textAlign: 'center' }}>
                  {autoPlay && (
                    <span
                      style={{
                        fontSize: 10,
                        color: '#fff',
                        background: 'rgba(229,57,53,0.9)',
                        padding: '1px 6px',
                        borderRadius: 3,
                        animation: 'video-play-indicator 1.5s ease-in-out infinite',
                        display: 'inline-block',
                        marginBottom: 6,
                      }}
                    >
                      ▶ 再生中
                    </span>
                  )}
                  <p style={{ margin: 0, color: 'rgba(255,255,255,0.7)', fontSize: 11 }}>{post.topic}</p>
                </div>
                <span style={{ position: 'absolute', bottom: 6, right: 8, color: 'rgba(255,255,255,0.8)', fontSize: 11 }}>{post.duration}</span>
                {/* hasIndividualStopButton=true のときだけ停止ボタンが出る */}
                {hasIndividualStopButton && (
                  <button type="button" style={{ position: 'absolute', bottom: 6, left: 8, background: 'rgba(0,0,0,0.5)', border: 'none', color: '#fff', borderRadius: 4, padding: '2px 8px', fontSize: 11, cursor: 'pointer' }}>⏸</button>
                )}
              </div>
            ) : (
              <p style={{ margin: '0 12px 10px', fontSize: 13, color: '#333', lineHeight: 1.5 }}>{post.text}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
