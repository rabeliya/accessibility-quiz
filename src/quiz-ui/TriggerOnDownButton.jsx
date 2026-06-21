import { useState } from 'react'

// カテゴリE：pointerdownイベントで即時実行される削除ボタンUI。
export default function TriggerOnDownButton({ label = 'データを完全に削除する' }) {
  const [pressed, setPressed] = useState(false)

  return (
    <div style={{ background: 'var(--color-surface)', padding: '16px' }}>
      <div
        style={{
          background: '#fff',
          border: '1px solid #e0e0e0',
          borderRadius: 8,
          padding: '20px 16px',
        }}
      >
        <p style={{ margin: '0 0 6px', fontSize: 13, fontWeight: 700, color: '#222' }}>
          アカウント設定
        </p>
        <p style={{ margin: '0 0 16px', fontSize: 11, color: '#777' }}>
          以下の操作は元に戻すことができません。十分にご注意ください。
        </p>

        <button
          onPointerDown={() => setPressed(true)}
          onPointerUp={() => setPressed(false)}
          onPointerLeave={() => setPressed(false)}
          style={{
            width: '100%',
            padding: '12px',
            background: pressed ? '#b71c1c' : '#c62828',
            color: '#fff',
            border: 'none',
            borderRadius: 6,
            fontSize: 13,
            fontWeight: 700,
            cursor: 'pointer',
            transform: pressed ? 'scale(0.98)' : 'scale(1)',
            transition: 'transform 0.05s',
          }}
        >
          🗑 {label}
        </button>
      </div>
    </div>
  )
}
