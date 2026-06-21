// カテゴリA：ステータスを「色の丸ドットだけ」で示すメンバー一覧。
// 色だけが情報伝達の手段になっている状態を、実物として見せるための出題UI。
//
// ※ props.users[].name に「田中（オンライン）」のように状態が括弧書きで入っていても、
//   表示時は括弧内を除去する。テキストで状態が読めると「色だけで判別」問題が
//   成立しなくなるため（＝答えがバレるのを防ぐ）。
const stripStatus = (name) => name.replace(/\s*[（(].*?[)）]\s*/g, '').trim()
const initial = (name) => stripStatus(name).charAt(0)

export default function AvatarStatusList({ users = [] }) {
  return (
    <ul
      style={{
        listStyle: 'none',
        margin: 0,
        padding: '20px 16px',
        background: 'var(--color-surface)',
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
      }}
    >
      {users.map((u, i) => (
        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ position: 'relative', flex: 'none' }}>
            <span
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                background: '#d7dae0',
                color: '#5b606b',
                display: 'grid',
                placeItems: 'center',
                fontWeight: 700,
                fontSize: 16,
              }}
            >
              {initial(u.name)}
            </span>
            {/* ステータス＝色の丸ドットのみ（ここが論点） */}
            <span
              style={{
                position: 'absolute',
                right: -1,
                bottom: -1,
                width: 13,
                height: 13,
                borderRadius: '50%',
                background: u.statusColor,
                border: '2px solid var(--color-surface)',
              }}
            />
          </span>
          <span style={{ fontSize: 15, fontWeight: 600 }}>{stripStatus(u.name)}</span>
        </li>
      ))}
    </ul>
  )
}
