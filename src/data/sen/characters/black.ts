import type { DataItem } from "../../../types"

export const senBlack: DataItem = {
  id: "sen-black",
  name: "ブラックホーク",
  groups: [
    {
      title: "固有技・必殺技",
      skills: [
        {
          name: "トマホークスウィング",
          command: "A",
          notes: ["上段"],
        },
        {
          name: "トマホークスウィング〜HP",
          command: "A・R",
          notes: ["上・構え移行"],
        },
        {
          name: "ダブルトマホーク",
          command: "A・A",
          notes: ["上・上"],
        },
        {
          name: "クリップスマッシュ",
          command: "→+A・AB",
          notes: ["中・上"],
        },
        {
          name: "ブレイクアックス",
          command: "←+A",
          notes: ["上段"],
        },
        {
          name: "ブレイクアックス〜HP",
          command: "←+A・R",
          notes: ["上・構え移行"],
        },
        {
          name: "ヒット・トゥ・キック",
          command: "↓+A・C",
          notes: ["下・上"],
        },
        {
          name: "ヒット・トゥ・キック〜HP",
          command: "↓+A・C・R",
          notes: ["下・上・構え移行"],
        },
        {
          name: "ヒット・トゥ・ブラスト",
          command: "↓+A・AB",
          notes: ["下・上"],
        },
        {
          name: "クロスオーバー",
          command: "↘+A・AB",
          notes: ["下・中"],
        },
        {
          name: "スラッガースタンプ",
          command: "↙+A・BC",
          notes: ["下・（中・上）"],
        },
        {
          name: "イーグルラッシュ",
          command: "←→+A・A・C",
          notes: ["上・上・中"],
        },
        {
          name: "ハンティングイーグル",
          command: "←→+A・A・C・（A・B・AB）",
          notes: ["上・上・中・（上・上・上・G不能）"],
        },
        {
          name: "チョップダウン",
          command: "B",
          notes: ["中段"],
        },
        {
          name: "スレイニードル",
          command: "B・B",
          notes: ["中・中"],
        },
        {
          name: "スレイループ",
          command: "B・C",
          notes: ["中・下"],
        },
        {
          name: "イグニートニードル",
          command: "→+B",
          notes: ["中段"],
        },
        {
          name: "バーンスマッシュ",
          command: "←+B",
          notes: ["中段"],
        },
        {
          name: "バーンスマッシュ〜HP",
          command: "←+B・R",
          notes: ["中・構え移行"],
        },
        {
          name: "ライジングスマッシュ",
          command: "←+B・AB",
          notes: ["中・上"],
        },
        {
          name: "ディバイダー",
          command: "↘+B",
          notes: ["中段"],
        },
        {
          name: "ヴォルトスマッシュ",
          command: "↙+B",
          notes: ["上段"],
        },
        {
          name: "ヴォルトスマッシュ〜HP",
          command: "↙+B・R",
          notes: ["上・構え移行"],
        },
        {
          name: "ヴォルトアタック",
          command: "↙+B・AB",
          notes: ["上・中"],
        },
        {
          name: "ヴォルトアタック〜HP",
          command: "↙+B・AB・R",
          notes: ["上・中・構え移行"],
        },
        {
          name: "ヴォルトブレイク",
          command: "↙+B・AB・C",
          notes: ["上・中・上"],
        },
        {
          name: "ヴォルトブレイク〜HP",
          command: "↙+B・AB・C・R",
          notes: ["上・中・上・構え移行"],
        },
        {
          name: "ヴォルトエアブレイク",
          command: "↙+B・BC",
          notes: ["上・中"],
        },
        {
          name: "ヴォルトエアブレイク〜HP",
          command: "↙+B・BC・R",
          notes: ["上・中・構え移行"],
        },
        {
          name: "ホークシンボル",
          command: "→→+B",
          notes: ["中段"],
        },
        {
          name: "ホークシンボル〜HP",
          command: "→→+B・R",
          notes: ["中・構え移行"],
        },
        {
          name: "ファーストストライク",
          command: "←←+B",
          notes: ["中段"],
        },
        {
          name: "ファーストストライク〜HP",
          command: "←←+B・R",
          notes: ["中・構え移行"],
        },
        {
          name: "ダブルストライク",
          command: "←←+B・B",
          notes: ["中・中"],
        },
        {
          name: "ダブルストライク〜HP",
          command: "←←+B・B・R",
          notes: ["中・中・構え移行"],
        },
        {
          name: "ストライクデッド",
          command: "←←+B・B・C",
          notes: ["中・中・下"],
        },
        {
          name: "ジェノサイドスマッシュ",
          command: "←←+B・B・AB",
          notes: ["中・中・上"],
        },
        {
          name: "上段蹴り",
          command: "C",
          notes: ["上段"],
        },
        {
          name: "中段蹴り",
          command: "↘+C",
          notes: ["中段"],
        },
        {
          name: "足払い",
          command: "↙+C",
          notes: ["下段"],
        },
        {
          name: "アクセルスラッシュ",
          command: "↓+C・B",
          notes: ["下・中"],
        },
        {
          name: "アクセルキック",
          command: "↓+C・C",
          notes: ["下・中"],
        },
        {
          name: "アクセルフェイントキック",
          command: "↓+C・↓+C",
          notes: ["下・下"],
        },
        {
          name: "アクセルスタンプ",
          command: "↓+C・BC",
          notes: ["下・上"],
        },
        {
          name: "アクセルスタンプ〜HP",
          command: "↓+C・BC・R",
          notes: ["下・上・構え移行"],
        },
        {
          name: "ボディプレス",
          command: "↓↘+C",
          notes: ["中段"],
          skills: [
            {
              name: "デスマウント",
              command: "（相手立ち状態で）ヒット時に自動発動",
              notes: ["打撃投げ"],
            },
          ],
        },
        {
          name: "HP（ホークポジション）",
          command: "※派生始動",
          notes: ["構え"],
          skills: [
            {
              name: "前進",
              command: "→",
              notes: ["前移動"],
            },
            {
              name: "奥移動",
              command: "↑",
              notes: ["奥移動"],
            },
            {
              name: "手前移動",
              command: "↓",
              notes: ["手前移動"],
            },
            {
              name: "解除",
              command: "←",
              notes: ["構え解除"],
            },
            {
              name: "マーダーウィング",
              command: "A",
              notes: ["中段"],
            },
            {
              name: "マーダーウィング〜HP",
              command: "A・R",
              notes: ["中・構え移行"],
            },
            {
              name: "ホークダイブ",
              command: "B",
              notes: ["中段"],
            },
            {
              name: "ホークダイブ〜HP",
              command: "B・R",
              notes: ["中・構え移行"],
            },
            {
              name: "スライドシュート",
              command: "C",
              notes: ["下段"],
            },
            {
              name: "スカイハンター",
              command: "R",
              notes: ["中段"],
              skills: [
                {
                  name: "ホールドクランチ",
                  command: "（相手立ち状態で）ヒット時に自動発動",
                  notes: ["打撃投げ"],
                },
              ],
            },
          ],
        },
        {
          name: "ストライクターン",
          command: "立ち途中にA・A",
          notes: ["中・中"],
        },
        {
          name: "ツインエッジ",
          command: "立ち途中にB",
          notes: ["（中・中）"],
        },
        {
          name: "スカイレボリューション",
          command: "立ち途中に↑+C",
          notes: ["中段"],
        },
        {
          name: "ステップスルー",
          command: "軸移動中にA",
          notes: ["下段"],
        },
        {
          name: "ループ・ザ・ループ〜HP",
          command: "軸移動中にAR",
          notes: ["中段"],
        },
        {
          name: "シャープスマッシュ",
          command: "AB",
          notes: ["上段"],
        },
        {
          name: "グレイブハンマー",
          command: "BC",
          notes: ["中段"],
        },
        {
          name: "コール・オブ・デス",
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
          name: "ホークハント",
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
          name: "ブラックホーク - サムライスピリッツ閃 @ ウィキ - atwiki",
          href: "https://w.atwiki.jp/samuraispiritssen/pages/46.html",
        },
      ],
    },
    {
      title: "もっと詳しい動画",
      links: [
        {
          name: "サムライスピリッツ閃 ブラックホーク 技一覧 - YouTube",
          href: "https://youtu.be/GTzg9e0RnFw",
        },
      ],
    },
  ],
}
