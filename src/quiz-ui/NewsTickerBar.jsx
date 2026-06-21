// カテゴリB：テキストが右から左へエンドレスにスクロールするニュースティッカーUI。
// ホバーしても止まらない（isHoverStop=false）状態を表す。
const HEADLINES = [
  '速報：国内株価が年初来高値を更新　日経平均4万円台を回復',
  '天気：明日は全国的に雨　東海・関東では強風に注意',
  '経済：大手IT企業が新たなAIサービスを発表　株価は急騰',
  'スポーツ：日本代表、アジア予選で2-0の快勝を収める',
]

const TICKER_TEXT = HEADLINES.join('　　　　　')

const STYLES = `
  @keyframes ticker-scroll {
    0%   { transform: translateX(100%); }
    100% { transform: translateX(-200%); }
  }
`

export default function NewsTickerBar({ scrollSpeed = 'normal', isHoverStop = false }) {
  const duration = scrollSpeed === 'fast' ? '14s' : scrollSpeed === 'slow' ? '28s' : '20s'

  return (
    <div style={{ background: 'var(--color-surface)', padding: '20px 16px' }}>
      <style>{STYLES}</style>

      {/* ニュースサイトのヘッダー */}
      <div style={{ background: '#fff', border: '1px solid #e0e0e0', borderRadius: 8, overflow: 'hidden' }}>
        {/* ロゴ風ヘッダー */}
        <div style={{ padding: '10px 14px', borderBottom: '1px solid #e0e0e0', display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontWeight: 900, fontSize: 16, color: '#c62828' }}>NEWS</span>
          <span style={{ fontWeight: 400, fontSize: 13, color: '#555' }}>DAILY</span>
        </div>

        {/* ティッカーバー */}
        <div style={{ display: 'flex', alignItems: 'center', background: '#c62828', overflow: 'hidden' }}>
          <span style={{ padding: '5px 10px', background: '#b71c1c', color: '#fff', fontSize: 11, fontWeight: 700, whiteSpace: 'nowrap', flexShrink: 0 }}>
            速報
          </span>
          <div style={{ flex: 1, overflow: 'hidden', position: 'relative', height: 28 }}>
            <p
              style={{
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                margin: 0,
                whiteSpace: 'nowrap',
                color: '#fff',
                fontSize: 12,
                animation: `ticker-scroll ${duration} linear infinite`,
                animationPlayState: 'running',
              }}
            >
              {TICKER_TEXT}
            </p>
          </div>
        </div>

        {/* 記事エリア（ティッカーと並行） */}
        <div style={{ padding: '12px 14px' }}>
          <p style={{ margin: 0, fontSize: 14, fontWeight: 600, color: '#111', lineHeight: 1.5 }}>
            本日のトップニュース
          </p>
          <p style={{ margin: '6px 0 0', fontSize: 12, color: '#555', lineHeight: 1.6 }}>
            今日の主要なニュースをまとめてお届けします。上部のティッカーでは最新の速報をリアルタイムでお知らせしています。
          </p>
        </div>
      </div>
    </div>
  )
}
