import styles from './ResultScreen.module.css'

export default function ResultScreen({ answers, onRetry }) {
  const total = answers.length
  const correct = answers.filter((a) => a.isCorrect).length
  const rate = total === 0 ? 0 : Math.round((correct / total) * 100)

  const comment =
    rate === 100
      ? '完璧。デザインレビューで頼れる目です。'
      : rate >= 70
        ? 'いい線。あと少しで安定して見抜けます。'
        : '伸びしろ大。解説の「誰がどう困る？」を覚えるのが近道。'

  return (
    <div className={styles.container}>
      <header className={styles.head}>
        <p className={styles.eyebrow}>結果</p>
        <div className={styles.score}>
          <span className={styles.scoreNum}>{correct}</span>
          <span className={styles.scoreTotal}> / {total}</span>
        </div>
        <p className={styles.rate}>正答率 {rate}%</p>
        <p className={styles.comment}>{comment}</p>
      </header>

      <ul className={styles.list}>
        {answers.map((a, i) => (
          <li key={a.question.id} className={styles.item}>
            <span className={`${styles.badge} ${a.isCorrect ? styles.ok : styles.ng}`}>
              {a.isCorrect ? '正解' : '不正解'}
            </span>
            <span className={styles.itemText}>
              <span className={styles.itemNo}>第{i + 1}問</span>
              {a.question.explanation?.wcag || a.question.question}
            </span>
          </li>
        ))}
      </ul>

      <button className={styles.retryBtn} onClick={onRetry}>
        トップに戻る
      </button>
    </div>
  )
}
