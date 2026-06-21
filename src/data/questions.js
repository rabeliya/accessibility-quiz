// =============================================================
//  WCAGクイズ 問題データ
//  ※フォーマットの詳細・執筆ルールは リポジトリ直下の QUIZ_FORMAT.md を参照。
//  ※このファイルは「分業の境界」。問題（QUESTIONS）の追記はここで行う。
//    出題UI（render.component）の実体は src/quiz-ui/ に置き、registry.js に登録する。
// =============================================================

// --- カテゴリ定義（設計書 第4章に対応）---
export const CATEGORIES = [
  { id: 'A', name: 'カラー & ビジュアル', desc: 'コントラスト比、色覚多様性への配慮' },
  { id: 'B', name: 'モーション & アニメーション', desc: '前庭障害への配慮、自動再生の制御' },
  { id: 'C', name: 'タイポグラフィ & リフロー', desc: '画面拡大、文字間隔、デバイスの向き' },
  { id: 'D', name: 'コンテンツ & ナビゲーション', desc: 'リンク文言、見出しの階層構造' },
  { id: 'E', name: 'インタラクション & タッチ', desc: '最小ターゲットサイズ、代替手段' },
  { id: 'F', name: 'フォーム & エラーハンドリング', desc: 'プレースホルダー乱用、色だけに頼らないエラー' },
]

// --- 問題本体 ---
// ↓↓↓ これは「フォーマットの見本」となるリファレンス問題。
//     実際の出題はこの形を真似て追加していく。
export const QUESTIONS = [
  {
    id: 'a-001',
    category: 'A',
    type: 'bad', // このUIがアクセシブルか: 'good' | 'bad'
    situation:
      'ECサイトの商品ページ。下の「カートに入れる」ボタンは、グレー背景に白文字でデザインされている。',
    // 出題UI（2層構造の「中身」）。component名は src/quiz-ui/registry.js のキーと一致させる。
    render: {
      component: 'ContrastButton',
      props: { label: 'カートに入れる', color: '#ffffff', background: '#9aa0a6' },
    },
    question:
      'このボタンの文字と背景のコントラストは、WCAG AA（通常テキスト 4.5:1）を満たしている？',
    options: [
      { id: 1, label: '満たしている' },
      { id: 2, label: '満たしていない' },
      { id: 3, label: 'フォントサイズが分からないので判断できない' },
    ],
    correct: 2, // 単一正解は数値、複数正解は配列 [..] でも可
    explanation: {
      // ① ユーザーの痛みの言語化
      pain: 'このコントラスト比は約 2.3:1。ロービジョンや高齢のユーザー、屋外の明るい光の下でスマホを見る人にとって、ボタンの文字がほとんど読めず「どこを押せば買えるのか」が分からなくなる。',
      // ② Figmaでの具体的な解決策
      fix: '背景を #5f6368 程度まで暗くすれば 4.5:1 を超える。色を変えずに解決したいなら、文字を太く・大きく（18pt以上 or 14pt太字）して「大きい文字」の基準 3:1 に逃がす手もある。Figmaのコントラストチェック用プラグイン（Stark等）で常時確認するのが安全。',
      // ③ WCAGの「お守り」（条文の超訳1行）
      wcag: '【1.4.3 コントラスト（最低限）AA】文字は背景と4.5:1以上（大きい文字は3:1以上）の差をつける。',
    },
  },
]

// --- ロジック（共通エンジン側。問題執筆時は触らなくてよい）---
function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// 正解を常に配列で取り出す（correct が単数でも配列でも吸収する）
export function getCorrectIds(question) {
  return Array.isArray(question.correct) ? question.correct : [question.correct]
}

// 出題する問題を選ぶ。category='all' なら全カテゴリ、それ以外は該当カテゴリのみ。
export function selectQuestions(category = 'all') {
  const pool = category === 'all' ? QUESTIONS : QUESTIONS.filter((q) => q.category === category)
  return shuffle(pool)
}
