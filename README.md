# WCAGクイズ — デザイナーのためのアクセシビリティ

プロダクトデザイナーが、実装（HTML/ARIA）ではなく **「デザイン判断」** の観点から
WCAGアクセシビリティを学ぶためのクイズアプリ。

設計の意図・スコープ・カテゴリ定義は、Obsidian側の **「WCAGクイズ設計書」** が一次資料。

## 開発

```bash
npm install
npm run dev      # 開発サーバ
npm run build    # 本番ビルド
```

## 構成（2層アーキテクチャ）

| 層 | 役割 | 場所 |
| --- | --- | --- |
| 共通シェル | 問題文・選択肢・解説・結果の枠（全カテゴリ共通） | `src/components/`, `src/App.jsx` |
| 出題UI | カテゴリ固有の「見せるUI」（実HTML/CSS） | `src/quiz-ui/` |
| データ | 問題本体・カテゴリ定義 | `src/data/questions.js` |

技術: React 18 + Vite 5 + CSS Modules（ux-quizと同一スタック）。

## 問題を追加したい人へ

→ **[QUIZ_FORMAT.md](./QUIZ_FORMAT.md)** を読む。問題データの書き方と、
出題UIコンポーネントの足し方をまとめている。

## ロードマップ

→ **[PLAN.md](./PLAN.md)**
