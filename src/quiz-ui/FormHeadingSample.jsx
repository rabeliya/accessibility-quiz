// カテゴリD：セクション見出しなしで入力項目がフラットに並ぶフォームUI。
const FIELDS_WITHOUT_HEADING = [
  { label: '氏名', placeholder: '山田 太郎', type: 'text' },
  { label: 'ふりがな', placeholder: 'やまだ たろう', type: 'text' },
  { label: '住所', placeholder: '東京都渋谷区...', type: 'text' },
  { label: '電話番号', placeholder: '090-0000-0000', type: 'tel' },
  { label: 'カード番号', placeholder: '1234 5678 9012 3456', type: 'text' },
  { label: '有効期限', placeholder: 'MM/YY', type: 'text' },
  { label: 'セキュリティコード', placeholder: '123', type: 'text' },
  { label: 'カード名義', placeholder: 'TARO YAMADA', type: 'text' },
]

export default function FormHeadingSample({ hasSectionHeadings = false, totalFields = 8 }) {
  const fields = FIELDS_WITHOUT_HEADING.slice(0, totalFields)

  return (
    <div style={{ background: 'var(--color-surface)', padding: '16px' }}>
      <div
        style={{
          background: '#fff',
          border: '1px solid #e0e0e0',
          borderRadius: 8,
          padding: '14px',
        }}
      >
        <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {fields.map((field, i) => {
            const isPaymentStart = i === 4
            return (
              <div key={i}>
                {hasSectionHeadings && isPaymentStart && (
                  <h3
                    style={{
                      margin: '4px 0 10px',
                      fontSize: 13,
                      fontWeight: 700,
                      color: '#333',
                      paddingBottom: 6,
                      borderBottom: '2px solid #e0e0e0',
                    }}
                  >
                    お支払い情報
                  </h3>
                )}
                {hasSectionHeadings && i === 0 && (
                  <h3
                    style={{
                      margin: '0 0 10px',
                      fontSize: 13,
                      fontWeight: 700,
                      color: '#333',
                      paddingBottom: 6,
                      borderBottom: '2px solid #e0e0e0',
                    }}
                  >
                    基本情報
                  </h3>
                )}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <label style={{ fontSize: 11, fontWeight: 600, color: '#444' }}>
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    readOnly
                    placeholder={field.placeholder}
                    style={{
                      border: '1px solid #ccc',
                      borderRadius: 5,
                      padding: '6px 10px',
                      fontSize: 12,
                      color: '#999',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>
            )
          })}
          <button
            type="submit"
            style={{
              marginTop: 6,
              padding: '9px 0',
              background: '#5c6bc0',
              color: '#fff',
              border: 'none',
              borderRadius: 6,
              fontWeight: 600,
              fontSize: 13,
              cursor: 'pointer',
            }}
          >
            登録する
          </button>
        </form>
      </div>
    </div>
  )
}
