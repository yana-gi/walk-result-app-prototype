# 散歩リザルト画面 - Reactアプリプロトタイプ

## 📖 概要

散歩中の「発見」と「思考」を記録・共有し、散歩をより豊かな体験にするWebアプリケーション

## 🎯 コンセプト

散歩という日常的な活動をゲーム化し、発見や思考を記録することで散歩体験をより充実させる

## 🛠️ 技術スタック

- **React** (Hooks使用)
- **Vite** (ビルドツール)
- **Tailwind CSS** (スタイリング)
- **Headless UI** (アクセシブルなUIコンポーネント)
- **Heroicons** (アイコンライブラリ)
- **clsx** (条件付きクラス名管理)
- **ローカルストレージ** (データ管理)
- **レスポンシブデザイン** (モバイルファースト)

## 📋 機能要件

### 散歩データ入力画面
- **距離** (km) - 数値入力
- **時間** (分) - 数値入力  
- **歩数** - 数値入力
- **消費カロリー** - 数値入力
- **天気** - セレクトボックス（晴れ/曇り/雨/雪）
- **気温** (℃) - 数値入力
- **時間帯** - セレクトボックス（朝/昼/夕方/夜）
- **コース名** - テキスト入力

### 発見・思考記録（核心機能）
- **考えたこと** - テキストエリア
- **発見したもの** - テキストエリア
- **犬カウンター** - ボタンクリックでカウントアップ
- **猫カウンター** - ボタンクリックでカウントアップ

### リザルト画面
- **ゲーム風のデザイン** (RPG風やスコア表示風)
- **入力されたデータを見やすく表示**
- **犬・猫の発見数をハイライト表示**
- **「散歩完了！」的な達成感のある演出**
- **スコア計算とランク表示** (S/A/B/C/Dランク)

### 履歴機能
- **過去の散歩記録をリスト表示**
- **日付順で並び替え**
- **各記録をクリックで詳細表示**
- **統計サマリー表示**
- **記録削除機能**

### データ管理
- **ローカルストレージに散歩データを保存**
- **データの永続化**
- **削除機能**

## 🎨 UI/UXデザイン要件

- **モバイルファースト** (スマホで使いやすく)
- **ゲーム風の楽しいUI**
- **直感的な操作**
- **犬・猫カウンターは大きなボタンで押しやすく**
- **リザルト画面は達成感を演出**
- **レスポンシブ対応**

## 📁 プロジェクト構成

```
src/
├── components/           # コンポーネント分割
│   ├── ui/              # 再利用可能なUIコンポーネント
│   │   ├── Button.jsx   # ボタンコンポーネント
│   │   ├── Input.jsx    # 入力フィールドコンポーネント
│   │   ├── Select.jsx   # セレクトボックスコンポーネント
│   │   ├── Textarea.jsx # テキストエリアコンポーネント
│   │   ├── Card.jsx     # カードコンポーネント
│   │   └── index.js     # UIコンポーネントのエクスポート
│   ├── WalkForm.jsx     # 散歩データ入力画面
│   ├── WalkResult.jsx   # リザルト画面
│   └── WalkHistory.jsx  # 履歴画面
├── hooks/               # カスタムフック
│   └── useLocalStorage.js
├── utils/               # ユーティリティ関数
│   └── walkData.js
├── App.jsx              # メインアプリ
├── index.css            # スタイル
└── main.jsx            # エントリーポイント
```

## 🎮 実装された機能

### スコア計算システム
```javascript
const calculateScore = (walkData) => {
  const baseScore = Math.floor(walkData.distance * 100 + walkData.duration * 2 + walkData.steps * 0.01);
  const animalBonus = (walkData.dogCount + walkData.catCount) * 50;
  const thoughtBonus = walkData.thoughts.length > 0 ? 100 : 0;
  const discoveryBonus = walkData.discoveries.length > 0 ? 100 : 0;
  
  return baseScore + animalBonus + thoughtBonus + discoveryBonus;
};
```

### ランクシステム
- **Sランク** (1000pt以上): 👑 ゴールド
- **Aランク** (800-999pt): ⭐ パープル
- **Bランク** (600-799pt): 🔥 ブルー
- **Cランク** (400-599pt): 💪 グリーン
- **Dランク** (0-399pt): 🌱 グレー

### データ構造
```javascript
{
  id: string,           // ユニークID
  date: string,         // ISO日付文字列
  distance: number,     // 距離(km)
  duration: number,     // 時間(分)
  steps: number,        // 歩数
  calories: number,     // 消費カロリー
  weather: string,      // 天気
  temperature: number,  // 気温(℃)
  timeOfDay: string,    // 時間帯
  courseName: string,   // コース名
  thoughts: string,     // 考えたこと
  discoveries: string,  // 発見したもの
  dogCount: number,     // 犬の発見数
  catCount: number      // 猫の発見数
}
```

## 🚀 起動方法

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動
npm run dev

# 本番ビルド
npm run build

# プレビュー
npm run preview
```

## 🌐 アクセス

開発サーバー: `http://localhost:5173/`

## 📱 対応デバイス

- **スマートフォン** (主要対象)
- **タブレット**
- **デスクトップ**

## 🔄 最新の更新

### v1.2.0 - モダンUIコンポーネント導入
- **Headless UI + カスタムコンポーネント**: より洗練されたUIコンポーネントシステムを導入
  - 新しいコンポーネント: `Button`, `Input`, `Select`, `Textarea`, `Card`
  - 一貫性のあるスタイリングとアニメーション
  - より良いアクセシビリティサポート
  - Focus状態とHover状態の改善されたフィードバック

### v1.1.0 - UI改善
- **入力フォーム縦並び化**: 散歩データと環境データの入力欄を並列表示から縦並び表示に変更
  - モバイルでの視認性と操作性を向上
  - 各入力項目により十分なスペースを確保
  - スクロール操作をより自然に

## 🎯 今後の拡張可能性

- GPS連携でルート記録
- 写真撮影機能
- SNS共有機能
- 歩数計API連携
- 天気API連携
- マップ表示
- チャレンジ・実績システム