import type { DataItem } from "../../../types"

export const senVaruta: DataItem = {
  id: "sen-varuta",
  name: "ヴァルター",
  groups: [
    {
      title: "固有技・必殺技",
      skills: [
        {
          name: "ゲヒルン・インパルス",
          command: "A",
          notes: ["上段"],
        },
        {
          name: "リピート・シュナイデ",
          command: "A・A",
          notes: ["上・上"],
        },
        {
          name: "シュタルク・ライツ",
          command: "←+A",
          notes: ["上段"],
        },
        {
          name: "ゾリーデ・シェルター",
          command: "↘+A・A",
          notes: ["下・下"],
        },
        {
          name: "ゾリーデ・シールド",
          command: "↘+A・C",
          notes: ["下・中"],
        },
        {
          name: "バイン・ホウィスク",
          command: "↙+A",
          notes: ["下段"],
        },
        {
          name: "シュナイデタイフーン",
          command: "↓↘→+A・A・A・A",
          notes: ["中・中・中・下"],
        },
        {
          name: "リュールング",
          command: "↓↙←+A（←継続）",
          notes: ["特殊動作"],
          skills: [
            {
              name: "キャンセル",
              command: "N",
              notes: ["特殊動作"],
            },
            {
              name: "フロイデ・ナーゲル",
              command: "B",
              notes: ["中段"],
            },
            {
              name: "キューンハイト・キック",
              command: "C",
              notes: ["下段"],
            },
          ],
        },
        {
          name: "トルキューンハイト・ナーゲル",
          command: "↓↙←+A（最大溜めで自動発動）",
          notes: ["G不能"],
        },
        {
          name: "アクセ・インパルス",
          command: "B",
          notes: ["中段"],
        },
        {
          name: "ドライ・コンビネーション α",
          command: "B・A・B",
          notes: ["中・上・上"],
        },
        {
          name: "ドライ・コンビネーション γ",
          command: "B・A・C",
          notes: ["中・上・中"],
        },
        {
          name: "フォルン・ブレイクスルー",
          command: "←+B・A",
          notes: ["上・上"],
        },
        {
          name: "フォルン・デストロイ",
          command: "←+B・↓+A",
          notes: ["上・下"],
        },
        {
          name: "ティーガー・ナーゲル",
          command: "↘+B・B",
          notes: ["上・中"],
        },
        {
          name: "ティーガー・シュライ",
          command: "↘+B・C",
          notes: ["上・下"],
        },
        {
          name: "クラフト・ドゥリュッケン",
          command: "↙+B・C",
          notes: ["中・（中・下）"],
        },
        {
          name: "バウホ・ブレイク",
          command: "→→+B",
          notes: ["中段"],
        },
        {
          name: "ブルスト・ジャブ",
          command: "←→+B・B・B",
          notes: ["上・上・上"],
          skills: [
            {
              name: "クラウド・ヴォルケ",
              command: "↘+B",
              notes: ["中段"],
            },
            {
              name: "ターンキック",
              command: "C",
              notes: ["下段"],
            },
          ],
        },
        {
          name: "シュタルク・ブルスト・ジャブ",
          command: "←→+B・B・B・B",
          notes: ["上・上・上・上"],
        },
        {
          name: "シャルフ・フリューゲル",
          command: "↓↘→+B",
          notes: ["中段"],
        },
        {
          name: "フェアトラオエン・ストロウク",
          command: "↓↙←+B（溜め可）",
          notes: ["中段"],
          skills: [
            {
              name: "キャンセル",
              command: "←←",
              notes: ["特殊動作"],
            },
          ],
        },
        {
          name: "マクシムム・ストロウク",
          command: "↓↙←+B（最大溜めで自動発動）",
          notes: ["G不能"],
        },
        {
          name: "オーバーキック",
          command: "C",
          notes: ["上段"],
        },
        {
          name: "フォルンキック",
          command: "←+C",
          notes: ["中段"],
        },
        {
          name: "ローキック",
          command: "↓+C",
          notes: ["下段"],
        },
        {
          name: "スピンローキック",
          command: "↙+C",
          notes: ["下段"],
        },
        {
          name: "ペルフェクト・ベツィーウング",
          command: "↘+C・B・C",
          notes: ["中・中・下"],
        },
        {
          name: "ハルス・ドロップ",
          command: "立ち途中にA",
          notes: ["中段"],
        },
        {
          name: "ドッペル・アタック",
          command: "立ち途中にB",
          notes: ["（中・中）"],
        },
        {
          name: "ビーネ・ストロウク",
          command: "軸移動中にB",
          notes: ["中段"],
        },
        {
          name: "シザメン・シュトース",
          command: "軸移動中にC",
          notes: ["中段"],
        },
        {
          name: "ヴェステ・ストロウク",
          command: "AB",
          notes: ["上段"],
        },
        {
          name: "シーザー・ウィル",
          command: "BC",
          notes: ["中段"],
        },
        {
          name: "シュロス・マウアー・デストロイ",
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
          name: "シュトゥルム・コンビネーション",
          command: "↓↘→+BC",
          notes: ["（上・中）"],
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "ヴァルター - サムライスピリッツ閃 @ ウィキ - atwiki",
          href: "https://w.atwiki.jp/samuraispiritssen/pages/29.html",
        },
      ],
    },
    {
      title: "もっと詳しい動画",
      links: [
        {
          name: "サムライスピリッツ閃 ヴァルター 技一覧 - YouTube",
          href: "https://youtu.be/eaOHQzQhMfM",
        },
      ],
    },
  ],
}
