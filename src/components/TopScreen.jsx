import { CATEGORIES, QUESTIONS } from '../data/questions'
import styles from './TopScreen.module.css'

export default function TopScreen({ onStart }) {
  const countOf = (catId) => QUESTIONS.filter((q) => q.category === catId).length

  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <p className={styles.eyebrow}>for Product Designers</p>
        <h1 className={styles.title}>WCAGクイズ</h1>
        <p className={styles.lead}>
          実装ではなく「デザイン判断」でアクセシビリティを学ぶ。
          <br />
          デザイナー向けのクイズです。
        </p>
        <button className={styles.startAll} onClick={() => onStart('all')}>
          全カテゴリからランダム出題（10問）
        </button>
      </header>

      <section className={styles.cats}>
        <h2 className={styles.catsTitle}>カテゴリを選ぶ</h2>
        <ul className={styles.catList}>
          {CATEGORIES.map((c) => {
            const n = countOf(c.id)
            return (
              <li key={c.id}>
                <button
                  className={styles.catBtn}
                  onClick={() => onStart(c.id)}
                  disabled={n === 0}
                >
                  <span className={styles.catId}>{c.id}</span>
                  <span className={styles.catBody}>
                    <span className={styles.catName}>{c.name}</span>
                    <span className={styles.catDesc}>{c.desc}</span>
                  </span>
                  <span className={styles.catCount}>{n === 0 ? '準備中' : `${n}問`}</span>
                </button>
              </li>
            )
          })}
        </ul>
      </section>
    </div>
  )
}
