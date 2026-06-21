// カテゴリF：枠線が赤くなるだけでエラーテキストが一切ないフォームの「bad」パターン。
// errorType='border-only' のとき、色だけでエラーを伝えている状態を再現する。
export default function FormErrorSample({ errorType = 'border-only' }) {
  const borderOnly = errorType === 'border-only'

  return (
    <div
      style={{
        padding: '20px 16px',
        background: 'var(--color-surface)',
      }}
    >
      <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Field label="お名前" id="name" />
        <Field
          label="メールアドレス"
          id="email"
          type="email"
          hasError
          borderOnly={borderOnly}
        />
        <Field label="お問い合わせ内容" id="message" multiline />

        <button
          type="submit"
          style={{
            marginTop: 4,
            padding: '9px 0',
            background: '#5c6bc0',
            color: '#fff',
            border: 'none',
            borderRadius: 6,
            fontWeight: 600,
            fontSize: 14,
            cursor: 'pointer',
          }}
        >
          送信する
        </button>
      </form>
    </div>
  )
}

function Field({ label, id, type = 'text', multiline = false, hasError = false, borderOnly = false }) {
  const errorBorder = hasError ? '2px solid #e53935' : '1px solid #ccc'
  const Tag = multiline ? 'textarea' : 'input'

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <label htmlFor={id} style={{ fontSize: 12, fontWeight: 600, color: '#333' }}>
        {label}
      </label>
      <Tag
        id={id}
        type={type}
        readOnly
        rows={multiline ? 3 : undefined}
        style={{
          border: errorBorder,
          borderRadius: 5,
          padding: '7px 10px',
          fontSize: 13,
          background: hasError ? '#fff8f8' : '#fff',
          outline: 'none',
          resize: 'none',
          color: '#555',
        }}
        placeholder={
          id === 'name' ? '山田 太郎' : id === 'email' ? 'example@email.com' : 'ご質問・ご要望をご記入ください'
        }
      />
      {/* borderOnly=true のとき：エラーテキストが出ない（問題のある状態） */}
      {hasError && !borderOnly && (
        <p style={{ margin: 0, fontSize: 11, color: '#e53935' }}>
          ⚠ メールアドレスを入力してください
        </p>
      )}
    </div>
  )
}
