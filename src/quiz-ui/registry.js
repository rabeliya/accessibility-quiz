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
import AvatarStatusList from './AvatarStatusList'
import LineChartSample from './LineChartSample'
import ParallaxHeroView from './ParallaxHeroView'
import AutoPlayCarousel from './AutoPlayCarousel'
import FlashingNeonBackground from './FlashingNeonBackground'
import SnowFlakesLoopView from './SnowFlakesLoopView'
import HoverTooltipSample from './HoverTooltipSample'
import ReactionEffectView from './ReactionEffectView'
import TimelineVideoFeed from './TimelineVideoFeed'
import NewsTickerBar from './NewsTickerBar'
import ResponsiveProductView from './ResponsiveProductView'
import TextResizeCard from './TextResizeCard'
import ReflowArticleView from './ReflowArticleView'
import TextSpacingButton from './TextSpacingButton'
import ImageOfTextSample from './ImageOfTextSample'
import StickyHeaderLandscape from './StickyHeaderLandscape'
import DataTableReflow from './DataTableReflow'
import JustifiedTextSample from './JustifiedTextSample'
import ArticleCardList from './ArticleCardList'
import HeadingHierarchySample from './HeadingHierarchySample'
import PageTitleSample from './PageTitleSample'
import ConsistentNaviSample from './ConsistentNaviSample'
import ConsistentIdSample from './ConsistentIdSample'
import MultipleWaysSample from './MultipleWaysSample'
import DownloadLinkSample from './DownloadLinkSample'
import FormHeadingSample from './FormHeadingSample'
import IconButtonSettings from './IconButtonSettings'
import FormErrorSample from './FormErrorSample'
import KanbanDragDrop from './KanbanDragDrop'
import PriceSliderSample from './PriceSliderSample'
import MotionActuationView from './MotionActuationView'
import TriggerOnDownButton from './TriggerOnDownButton'
import InlineLinkSpacing from './InlineLinkSpacing'
import IconOnlySubmitButton from './IconOnlySubmitButton'
import EnhancedTargetSizeButton from './EnhancedTargetSizeButton'
import PlaceholderAsLabel from './PlaceholderAsLabel'
import RequiredFieldDesign from './RequiredFieldDesign'
import VagueErrorText from './VagueErrorText'
import SessionTimeoutForm from './SessionTimeoutForm'
import IrreversibleActionForm from './IrreversibleActionForm'
import FormatInputSample from './FormatInputSample'
import AutoFocusMoveForm from './AutoFocusMoveForm'
import TabNavigationSample from './TabNavigationSample'
import IconButtonHeart from './IconButtonHeart'
import HeroCatchphrase from './HeroCatchphrase'
import PhotoOverlayCard from './PhotoOverlayCard'
import InlineLinkSample from './InlineLinkSample'

export const UI_REGISTRY = {
  ContrastButton,        // カテゴリA: コントラスト比（a-001）
  AvatarStatusList,      // カテゴリA: 色だけのステータス表示（a-002）
  LineChartSample,       // カテゴリA: 色だけで区別する折れ線グラフ（a-003）
  TabNavigationSample,   // カテゴリA: 非アクティブタブのコントラスト不足（a-004）
  IconButtonHeart,       // カテゴリA: 非テキスト要素コントラスト（a-005）
  HeroCatchphrase,       // カテゴリA: 大きな文字の緩和基準（a-006）
  PhotoOverlayCard,      // カテゴリA: 写真上の白文字（a-007）
  InlineLinkSample,      // カテゴリA: 下線なしインラインリンク（a-008）
  ParallaxHeroView,      // カテゴリB: prefers-reduced-motion を無視したパララックス（b-001）
  AutoPlayCarousel,      // カテゴリB: 停止ボタンなし自動再生カルーセル（b-002）
  FlashingNeonBackground,// カテゴリB: 明滅するネオン背景エフェクト（b-003）
  SnowFlakesLoopView,    // カテゴリB: 無限ループする雪アニメーション（b-004）
  HoverTooltipSample,    // カテゴリB: 自動消滅するホバーツールチップ（b-005）
  ReactionEffectView,    // カテゴリB: クリックで全画面パーティクルエフェクト（b-006）
  TimelineVideoFeed,     // カテゴリB: 個別停止なし自動再生タイムライン動画（b-007）
  NewsTickerBar,         // カテゴリB: ホバーで止まらないニュースティッカー（b-008）
  ResponsiveProductView, // カテゴリC: 画面の向きを縦に固定したスマホUI（c-001）
  TextResizeCard,        // カテゴリC: 高さ固定カードで文字200%拡大時にはみ出す（c-002）
  ReflowArticleView,     // カテゴリC: 固定幅レイアウトで横スクロール発生（c-003）
  TextSpacingButton,     // カテゴリC: 固定サイズボタンで文字間隔拡大時に崩れる（c-004）
  ImageOfTextSample,     // カテゴリC: 画像化された見出しテキスト（c-005）
  StickyHeaderLandscape, // カテゴリC: 横画面で固定ヘッダー・フッターが領域を圧迫（c-006）
  DataTableReflow,       // カテゴリC: テーブルのみ横スクロールを許容するgoodパターン（c-007）
  JustifiedTextSample,   // カテゴリC: 両端揃えテキストのリバー現象（c-008）
  ArticleCardList,       // カテゴリD: 「詳細はこちら」が並ぶ記事一覧（d-001）
  HeadingHierarchySample,// カテゴリD: 見出し階層のスキップ・逆転（d-002）
  PageTitleSample,       // カテゴリD: 全タブ同一タイトル（d-003）
  ConsistentNaviSample,  // カテゴリD: 画面をまたいでナビ順が変わる（d-004）
  ConsistentIdSample,    // カテゴリD: 同機能なのにアイコンが画面によって違う（d-005）
  MultipleWaysSample,    // カテゴリD: 一本道ナビのみで検索・サイトマップなし（d-006）
  DownloadLinkSample,    // カテゴリD: 同一文言リンクが複数並ぶ（d-007）
  FormHeadingSample,     // カテゴリD: セクション見出しなしフォーム（d-008）
  IconButtonSettings,    // カテゴリE: タップ領域が狭いアイコンボタン（e-001）
  KanbanDragDrop,        // カテゴリE: ドラッグのみのカンバンUI（e-002）
  PriceSliderSample,     // カテゴリE: ドラッグのみの価格スライダー（e-003）
  MotionActuationView,   // カテゴリE: シェイクのみでUndoするUI（e-004）
  TriggerOnDownButton,   // カテゴリE: pointerdownで即実行される削除ボタン（e-005）
  InlineLinkSpacing,     // カテゴリE: 近接する2つのインラインリンク（e-006）
  IconOnlySubmitButton,  // カテゴリE: アイコンのみの送信ボタン（e-007）
  EnhancedTargetSizeButton, // カテゴリE: 48pxのコンバージョンボタン（e-008）
  FormErrorSample,       // カテゴリF: 枠線のみでエラーテキストがないフォーム（f-001）
  PlaceholderAsLabel,    // カテゴリF: プレースホルダーのみのラベルなしフォーム（f-002）
  RequiredFieldDesign,   // カテゴリF: 「*」のみで必須を示すフォーム（f-003）
  VagueErrorText,        // カテゴリF: 修正方法がない曖昧なエラーメッセージ（f-004）
  SessionTimeoutForm,    // カテゴリF: 警告なしの制限時間付きフォーム（f-005）
  IrreversibleActionForm,// カテゴリF: 確認画面なし振込フォーム（f-006）
  FormatInputSample,     // カテゴリF: フォーマット案内なし電話番号欄（f-007）
  AutoFocusMoveForm,     // カテゴリF: 自動フォーカス移動クレカ入力（f-008）
}

// render が無い問題（テキストのみで成立する設問）も許容する。
export function resolveQuizUI(render) {
  if (!render) return null
  return UI_REGISTRY[render.component] ?? null
}
