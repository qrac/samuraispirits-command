import type { DataItem } from "../../../types"

export const senAngelica: DataItem = {
  id: "sen-angelica",
  name: "アンジェリカ",
  groups: [
    {
      title: "固有技・必殺技",
      skills: [
        {
          name: "サイドエレガント",
          command: "A",
          notes: ["上段"],
        },
        {
          name: "リターンエレガント",
          command: "A・A",
          notes: ["上・上"],
        },
        {
          name: "ブレイドエレガント",
          command: "A・A・B",
          notes: ["上・上・中"],
        },
        {
          name: "トリプルエレガント",
          command: "A・A・↓+A",
          notes: ["上・上・下"],
        },
        {
          name: "ミミックスタンプ",
          command: "→+A・A・C",
          notes: ["上・上・上"],
        },
        {
          name: "ミミックスタブ",
          command: "→+A・A・↓+C",
          notes: ["上・上・下"],
        },
        {
          name: "ジャッジメント",
          command: "←+A・A",
          notes: ["上・上"],
        },
        {
          name: "ローゼズソーン",
          command: "↘+A・A",
          notes: ["中・上"],
        },
        {
          name: "ローリングローズ",
          command: "↘+A・A・B",
          notes: ["中・上・（中・中・中）"],
          skills: [
            {
              name: "ショートエレガント",
              command: "連携後にA",
              notes: ["中段"],
            },
            {
              name: "ローリングローズ",
              command: "連携後にB",
              notes: ["（中・中・中）"],
            },
            {
              name: "ローキック",
              command: "連携後にC",
              notes: ["下段"],
            },
            {
              name: "ダウンポジション",
              command: "連携後に←←",
              notes: ["特殊動作"],
              skills: [
                {
                  name: "バックロール",
                  command: "連携後に←←",
                  notes: ["特殊動作"],
                },
              ],
            },
          ],
        },
        {
          name: "ループ・ザ・ディガー",
          command: "↙+A・A・A",
          notes: ["下・下・下"],
          skills: [
            {
              name: "サマーソルト",
              command: "1〜3段目中にC",
              notes: ["中段"],
            },
            {
              name: "ターン・エッジ",
              command: "1〜3段目中にC・B",
              notes: ["中・中"],
            },
          ],
        },
        {
          name: "エスケープ・ザ・ヘブン",
          command: "←←+A",
          notes: ["中段"],
        },
        {
          name: "エア・ダンス",
          command: "↓↙←+A",
          notes: ["中段"],
        },
        {
          name: "バーチカルエレガント",
          command: "B",
          notes: ["中段"],
        },
        {
          name: "グレイブシュレット",
          command: "B・B",
          notes: ["中・中"],
        },
        {
          name: "スネークテイル",
          command: "→+B",
          notes: ["中段"],
        },
        {
          name: "プレッシャーゲート",
          command: "←+B・A・A",
          notes: ["中・上・上"],
        },
        {
          name: "プレッシャーゲート〜ローリングローズ",
          command: "←+B・A・B",
          notes: ["中・上・（中・中・中）"],
        },
        {
          name: "ノンデーエル",
          command: "↓+B・B・B",
          notes: ["下・中・中"],
        },
        {
          name: "デモンズスタブ",
          command: "↘+B・B",
          notes: ["中・中"],
        },
        {
          name: "ルナティックゲート",
          command: "↙+B・B",
          notes: ["中・中"],
          skills: [
            {
              name: "ダウンポジション",
              command: "↓",
              notes: ["特殊動作"],
            },
            {
              name: "バックロール",
              command: "←←",
              notes: ["特殊動作"],
            },
          ],
        },
        {
          name: "ルナティックゲート・セカンド",
          command: "↙+B・C",
          notes: ["中・下"],
          skills: [
            {
              name: "ダウンポジション",
              command: "↓",
              notes: ["特殊動作"],
            },
            {
              name: "バックロール",
              command: "←←",
              notes: ["特殊動作"],
            },
          ],
        },
        {
          name: "スタン・ショット",
          command: "→→+B",
          notes: ["中段"],
        },
        {
          name: "スピン・スタブ",
          command: "↓↘→+B",
          notes: ["中段"],
        },
        {
          name: "上段蹴り",
          command: "C",
          notes: ["上段"],
        },
        {
          name: "ミュートキック",
          command: "→+C・C・C",
          notes: ["中・上・下"],
        },
        {
          name: "ターン・エッジ",
          command: "←+C・B",
          notes: ["中・中"],
        },
        {
          name: "ロースタンプ",
          command: "↓+C",
          notes: ["下段"],
        },
        {
          name: "スパイラル・ヒール",
          command: "↘+C・C・C",
          notes: ["中・中・中"],
        },
        {
          name: "スパイラル・ドロップ",
          command: "↘+C・↓+C・AB",
          notes: ["中・下・中"],
        },
        {
          name: "スパイラル・ヒール〜スパイラル・ドロップ",
          command: "↘+C・C・↓+C・AB",
          notes: ["中・中・下・中"],
        },
        {
          name: "ヘル・メッセンジャー",
          command: "↙+C・A・A",
          notes: ["下・下・上"],
        },
        {
          name: "スカイ・バタフライ",
          command: "↗+C",
          notes: ["上段"],
        },
        {
          name: "マーブルサイド",
          command: "立ち途中にA",
          notes: ["上段"],
        },
        {
          name: "バリアントアップ",
          command: "立ち途中にB",
          notes: ["中段"],
        },
        {
          name: "スコーピオン",
          command: "立ち途中にC",
          notes: ["中段"],
        },
        {
          name: "ネックハント",
          command: "軸移動中にA",
          notes: ["上段"],
        },
        {
          name: "テイルドロップ",
          command: "軸移動中にB",
          notes: ["中段"],
        },
        {
          name: "クリフ・ホール",
          command: "軸移動中にC",
          notes: ["下段"],
        },
        {
          name: "スナイプ・ファング",
          command: "AB",
          notes: ["上段"],
        },
        {
          name: "ブラッディ・ファング",
          command: "BC",
          notes: ["中段"],
        },
        {
          name: "スネークファング",
          command: "ABCR",
          notes: ["G不能"],
        },
      ],
    },
    {
      title: "怒り爆発中専用技",
      titleColor: 2,
      skills: [
        {
          name: "サンド・オブ・チェイサー",
          command: "↓↘→+BC",
          notes: ["中段"],
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "アンジェリカ - サムライスピリッツ閃 @ ウィキ - atwiki",
          href: "https://w.atwiki.jp/samuraispiritssen/pages/21.html",
        },
      ],
    },
    {
      title: "もっと詳しい動画",
      links: [
        {
          name: "サムライスピリッツ閃 アンジェリカ 技一覧 - YouTube",
          href: "https://youtu.be/VGgf1UARKuk",
        },
      ],
    },
  ],
}
