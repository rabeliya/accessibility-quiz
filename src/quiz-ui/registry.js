// =============================================================
//  出題UIコンポーネントの登録簿（2層構造の「中身」側の入口）
//
//  問題データ（questions.js）の render.component に書いた文字列を、
//  ここで実体の React コンポーネントに対応づける。
//
//  新しいカテゴリ・新しい出題UIを足すときは：
//   1. src/quiz-ui/ に ◯◯.jsx を作る
//   2. ここに import して UI_REGISTRY に1行追加する
//   3. questions.js の render.component にそのキー名を書く
// =============================================================
import ContrastButton from './ContrastButton'

export const UI_REGISTRY = {
  ContrastButton,
  // 例）今後ここに追加していく：
  // CarouselDemo,        // カテゴリB: 自動再生カルーセル
  // ReflowFrame,         // カテゴリC: 横向きリフロー
  // LinkCardList,        // カテゴリD: 「詳細はこちら」リンク群
  // TapTarget,           // カテゴリE: 最小ターゲットサイズ
  // FormError,           // カテゴリF: エラー表示
}

// render が無い問題（テキストのみで成立する設問）も許容する。
export function resolveQuizUI(render) {
  if (!render) return null
  return UI_REGISTRY[render.component] ?? null
}
