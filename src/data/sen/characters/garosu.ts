import type { DataItem } from "../../../types"

export const senGarosu: DataItem = {
  id: "sen-garosu",
  name: "ガロス",
  groups: [
    {
      title: "固有技・必殺技",
      skills: [
        {
          name: "サイドアックス",
          command: "A",
          notes: ["上段"],
        },
        {
          name: "アックスブロウ",
          command: "A・A",
          notes: ["上・上"],
        },
        {
          name: "スイングガレオン",
          command: "←+A",
          notes: ["上段"],
        },
        {
          name: "ジェイドエックス",
          command: "↘+A・A",
          notes: ["中・下"],
        },
        {
          name: "ジェイドプラス",
          command: "↘+A・B",
          notes: ["中・中"],
        },
        {
          name: "フルスライス",
          command: "↙+A",
          notes: ["上段"],
        },
        {
          name: "サイクロンアックス",
          command: "↓↘→+A・A",
          notes: ["上・下"],
        },
        {
          name: "サイクロンダウン",
          command: "↓↘→+A・BC・B",
          notes: ["上・中・下"],
        },
        {
          name: "サイクロンドライバー",
          command: "↓↘→+A・C・B",
          notes: ["上・中・下"],
        },
        {
          name: "バーチカルアックス",
          command: "B",
          notes: ["中段"],
        },
        {
          name: "バスターエッジ",
          command: "B・A",
          notes: ["中・上"],
        },
        {
          name: "バスタークロス",
          command: "B・B",
          notes: ["中・中"],
        },
        {
          name: "ヴォルテックカイザー",
          command: "←+B・A・B",
          notes: ["中・中・中"],
        },
        {
          name: "シザーアッパー",
          command: "↘+B",
          notes: ["中段"],
        },
        {
          name: "アックスハルバート",
          command: "↙+B",
          notes: ["下段"],
        },
        {
          name: "リヴァイブストーム",
          command: "→→+B・A",
          notes: ["中・中"],
        },
        {
          name: "グリーフストライク",
          command: "←→+B・B",
          notes: ["中・中"],
        },
        {
          name: "ハリケーン",
          command: "←←+B・B・A・A・A・A・A・A",
          notes: ["中・中・上・上・上・上・上・上"],
          skills: [
            {
              name: "ビッグウェーブ",
              command: "3〜8段目中にC",
              notes: ["中段"],
            },
          ],
        },
        {
          name: "ホエールクラッシュ",
          command: "↓↘→+B",
          notes: ["中段"],
        },
        {
          name: "ハイキック",
          command: "C",
          notes: ["上段"],
        },
        {
          name: "デコレーションヒット",
          command: "←+C・C",
          notes: ["中・中"],
        },
        {
          name: "キャノンキック",
          command: "↓+C・C",
          notes: ["下・中"],
        },
        {
          name: "ウェーブラッシュ",
          command: "屈中に↘+C・↘+C・↘+C",
          notes: ["下・下・下"],
        },
        {
          name: "ワイルドロック",
          command: "↘+C",
          notes: ["中段"],
        },
        {
          name: "ジャストスライス",
          command: "↘+C・A",
          notes: ["中・上"],
        },
        {
          name: "ワイルドハルバート",
          command: "↘+C・B",
          notes: ["中・中"],
        },
        {
          name: "ショルダーインパクト",
          command: "↘+C・C",
          notes: ["中・中"],
        },
        {
          name: "ダブルワイルドロック",
          command: "↘+C・AB",
          notes: ["中・中"],
        },
        {
          name: "ポディプレッシャー",
          command: "↘+C・BC",
          notes: ["中・中"],
        },
        {
          name: "ロースピンキック",
          command: "↙+C",
          notes: ["下段"],
        },
        {
          name: "フェイントアックス",
          command: "→→+C・B",
          notes: ["中・中"],
        },
        {
          name: "ホエールホーン",
          command: "→→+C・↓+B",
          notes: ["中・下"],
        },
        {
          name: "ホエールドライバー",
          command: "↓↘→+C",
          notes: ["中段"],
        },
        {
          name: "ホエールドライバー〜ホエールホーン",
          command: "↓↘→+C・B",
          notes: ["中・下"],
        },
        {
          name: "グリーフスレイ",
          command: "立ち途中にA",
          notes: ["中段"],
        },
        {
          name: "グリーフアップ",
          command: "立ち途中にB",
          notes: ["中段"],
        },
        {
          name: "ダイブキック",
          command: "立ち途中にC",
          notes: ["中段"],
        },
        {
          name: "ダイブキック〜ホエールホーン",
          command: "立ち途中にC・B",
          notes: ["中・下"],
        },
        {
          name: "ドレッドライン",
          command: "軸移動中にA",
          notes: ["上段"],
        },
        {
          name: "バイキングフルスイング",
          command: "AB",
          notes: ["上段"],
        },
        {
          name: "クラッシュバスター",
          command: "BC",
          notes: ["中段"],
        },
        {
          name: "アイアンビッグウェーブ",
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
          name: "ビッグホエールドライバー",
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
          name: "ガロス - サムライスピリッツ閃 @ ウィキ - atwiki",
          href: "https://w.atwiki.jp/samuraispiritssen/pages/26.html",
        },
      ],
    },
    {
      title: "もっと詳しい動画",
      links: [
        {
          name: "サムライスピリッツ閃 ガロス 技一覧 - YouTube",
          href: "https://youtu.be/xQcDXMiT_EI",
        },
      ],
    },
  ],
}
