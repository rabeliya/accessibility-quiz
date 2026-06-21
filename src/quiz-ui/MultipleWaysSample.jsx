// カテゴリD：検索もサイトマップもなく、階層を順にたどるしか目的ページに到達できないUI。
const BREADCRUMB = ['ヘルプセンター', 'アカウント管理', 'セキュリティ', 'パスワード変更できない場合']

export default function MultipleWaysSample({ hasSearch = false, hasSitemap = false, totalSteps = 4 }) {
  return (
    <div style={{ background: 'var(--color-surface)', padding: '16px' }}>
      <div
        style={{
          background: '#fff',
          border: '1px solid #e0e0e0',
          borderRadius: 8,
          overflow: 'hidden',
        }}
      >
        {/* ヘッダー */}
        <div
          style={{
            background: '#1565c0',
            padding: '10px 14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span style={{ color: '#fff', fontWeight: 700, fontSize: 14 }}>ヘルプセンター</span>
          {hasSearch ? (
            <div
              style={{
                background: 'rgba(255,255,255,0.2)',
                borderRadius: 20,
                padding: '4px 12px',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              <span style={{ color: '#fff', fontSize: 12 }}>🔍</span>
              <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: 11 }}>検索...</span>
            </div>
          ) : (
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 11 }}>（検索なし）</span>
          )}
        </div>

        {/* パンくずリスト */}
        <div style={{ padding: '8px 14px', borderBottom: '1px solid #eee', background: '#f9f9f9' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, flexWrap: 'wrap' }}>
            {BREADCRUMB.slice(0, totalSteps).map((item, i) => (
              <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                {i > 0 && <span style={{ color: '#bbb', fontSize: 10 }}>›</span>}
                <span
                  style={{
                    fontSize: 11,
                    color: i < totalSteps - 1 ? '#1565c0' : '#333',
                    fontWeight: i === totalSteps - 1 ? 600 : 400,
                  }}
                >
                  {item}
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* カテゴリ一覧（クリックして下っていくしかない） */}
        <div style={{ padding: '10px 14px' }}>
          <p style={{ margin: '0 0 8px', fontSize: 12, color: '#555' }}>
            このカテゴリの記事（クリックして絞り込む）
          </p>
          {['パスワードの変更方法', 'パスワードを忘れた場合', 'パスワード変更できない場合', 'ログインできない場合'].map(
            (item, i) => (
              <div
                key={i}
                style={{
                  padding: '7px 0',
                  borderBottom: '1px solid #f0f0f0',
                  fontSize: 12,
                  color: '#1565c0',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <span>{item}</span>
                <span style={{ color: '#bbb' }}>›</span>
              </div>
            )
          )}
        </div>

        {hasSitemap && (
          <div style={{ padding: '8px 14px', borderTop: '1px solid #eee', textAlign: 'center' }}>
            <span style={{ fontSize: 11, color: '#1565c0' }}>🗺 サイトマップ</span>
          </div>
        )}
      </div>
    </div>
  )
}
