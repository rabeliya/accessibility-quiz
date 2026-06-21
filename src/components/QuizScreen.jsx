import { useState, useRef } from 'react'
import { getCorrectIds, CATEGORIES } from '../data/questions'
import { resolveQuizUI } from '../quiz-ui/registry'
import styles from './QuizScreen.module.css'

const categoryName = (id) => CATEGORIES.find((c) => c.id === id)?.name ?? ''

const sameSet = (a, b) => {
  if (a.length !== b.length) return false
  const sb = [...b].sort()
  return [...a].sort().every((v, i) => v === sb[i])
}

export default function QuizScreen({ questions, onComplete, onQuit }) {
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState(null)
  const [answered, setAnswered] = useState(false)
  const [showQuitDialog, setShowQuitDialog] = useState(false)
  const answersRef = useRef([])
  const containerRef = useRef(null)

  const question = questions[index]
  const correctIds = getCorrectIds(question)
  const QuizUI = resolveQuizUI(question.render)
  const progress = ((index + 1) / questions.length) * 100
  const isCorrect = answered && sameSet([selected], correctIds)

  const handleSelect = (id) => {
    if (answered) return
    setSelected(id)
    setAnswered(true)
    answersRef.current = [
      ...answersRef.current,
      { question, selected: id, isCorrect: sameSet([id], correctIds) },
    ]
  }

  const handleNext = () => {
    const next = index + 1
    if (next >= questions.length) {
      onComplete(answersRef.current)
      return
    }
    setIndex(next)
    setSelected(null)
    setAnswered(false)
    containerRef.current?.scrollTo({ top: 0, behavior: 'instant' })
  }

  const optionState = (id) => {
    if (!answered) return 'default'
    if (correctIds.includes(id)) return 'correct'
    if (id === selected) return 'incorrect'
    return 'dimmed'
  }

  return (
    <div className={styles.container} ref={containerRef}>
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <span className={styles.progressText}>
            第 {index + 1} / {questions.length} 問
            {categoryName(question.category) && `・${categoryName(question.category)}`}
          </span>
          <button className={styles.quitBtn} onClick={() => setShowQuitDialog(true)}>
            中断する
          </button>
        </div>
        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: `${progress}%` }} />
        </div>
      </header>

      <main className={styles.main} key={question.id}>
        <p className={styles.situation}>{question.situation}</p>

        {QuizUI && (
          <div className={styles.stage}>
            <QuizUI {...(question.render.props || {})} />
          </div>
        )}

        <p className={styles.questionText}>{question.question}</p>

        <div className={styles.options}>
          {question.options.map((opt) => {
            const state = optionState(opt.id)
            return (
              <button
                key={opt.id}
                className={`${styles.optBtn} ${styles[`state-${state}`]}`}
                onClick={() => handleSelect(opt.id)}
                disabled={answered}
              >
                <span className={styles.optLabel}>{opt.label}</span>
                {answered && state === 'correct' && <span className={styles.mark}>✓</span>}
                {answered && state === 'incorrect' && <span className={styles.mark}>✗</span>}
              </button>
            )
          })}
        </div>

        {answered && (
          <div className={styles.feedback}>
            <div
              className={`${styles.resultBadge} ${
                isCorrect ? styles.resultCorrect : styles.resultIncorrect
              }`}
            >
              {isCorrect ? '正解！' : '不正解'}
            </div>

            <Explanation explanation={question.explanation} />
          </div>
        )}
      </main>

      {answered && (
        <footer className={styles.footer}>
          <button className={styles.nextBtn} onClick={handleNext}>
            {index === questions.length - 1 ? '結果を見る' : '次の問題へ'}
          </button>
        </footer>
      )}

      {showQuitDialog && (
        <div className={styles.dialogOverlay} role="dialog" aria-modal="true" aria-labelledby="quit-dialog-title">
          <div className={styles.dialog}>
            <p id="quit-dialog-title" className={styles.dialogText}>クイズを中断しますか？</p>
            <div className={styles.dialogActions}>
              <button className={styles.dialogCancelBtn} onClick={() => setShowQuitDialog(false)}>
                続ける
              </button>
              <button className={styles.dialogQuitBtn} onClick={onQuit}>
                中断する
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// 解説3ステップ（痛み / Figmaの打ち手 / WCAGのお守り）
function Explanation({ explanation }) {
  // 後方互換: explanation が文字列でも壊れないようにしておく
  if (typeof explanation === 'string') {
    return <p className={styles.expText}>{explanation}</p>
  }
  const { pain, fix, wcag } = explanation || {}
  return (
    <div className={styles.expBlocks}>
      {pain && (
        <div className={styles.expBlock}>
          <span className={styles.expLabel}>誰が、どう困る？</span>
          <p className={styles.expText}>{pain}</p>
        </div>
      )}
      {fix && (
        <div className={styles.expBlock}>
          <span className={styles.expLabel}>デザイナーの打ち手</span>
          <p className={styles.expText}>{fix}</p>
        </div>
      )}
      {wcag && (
        <div className={styles.expWcag}>
          <span className={styles.expWcagIcon} aria-hidden="true">
            ⚖
          </span>
          <p className={styles.expWcagText}>{wcag}</p>
        </div>
      )}
    </div>
  )
}
