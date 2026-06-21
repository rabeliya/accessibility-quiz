// カテゴリC：両端揃え（Justify）テキストで単語間に不自然な空白（リバー現象）が生じるUI。
const BODY =
  'アクセシビリティとは、製品やサービスが、できるだけ多くの人々に使いやすい形で設計・提供されることを指します。ウェブにおいては、視覚や聴覚、運動機能などに障害を持つユーザーを含む、すべての人が情報や機能に等しくアクセスできる状態を目指すことが重要です。特に、認知障害や読字障害（ディスレクシア）を持つユーザーにとっては、テキストの視覚的な見た目が理解しやすさに直結します。'

export default function JustifiedTextSample({ alignment = 'justify' }) {
  return (
    <div style={{ background: 'var(--color-surface)', padding: '16px' }}>
      <div style={{ background: '#fff', border: '1px solid #e0e0e0', borderRadius: 8, padding: '16px', maxWidth: 320 }}>
        <h3 style={{ margin: '0 0 10px', fontSize: 14, fontWeight: 700, color: '#111' }}>
          アクセシビリティの重要性
        </h3>
        <p
          style={{
            margin: 0,
            fontSize: 13,
            color: '#333',
            lineHeight: 1.8,
            textAlign: alignment,
          }}
        >
          {BODY}
        </p>
      </div>
    </div>
  )
}
