import type { DataItem } from "../../../types"

export const senCharlotte: DataItem = {
  id: "sen-charlotte",
  name: "シャルロット",
  groups: [
    {
      title: "固有技・必殺技",
      skills: [
        {
          name: "ファーント",
          command: "A",
          notes: ["上段"],
        },
        {
          name: "デゥーファーント",
          command: "A・A",
          notes: ["上・上"],
        },
        {
          name: "デゥーファーント〜EF",
          command: "A・A・R",
          notes: ["上・上・構え移行"],
        },
        {
          name: "アンダーニードル",
          command: "A・B",
          notes: ["上・下"],
        },
        {
          name: "クイックレイ",
          command: "↘+A",
          notes: ["中段"],
        },
        {
          name: "ボンナ・ウァン・スラッシュ",
          command: "←+A・A・A",
          notes: ["上・中・上"],
        },
        {
          name: "ボンナ・ウァン・スラッシュ〜EF",
          command: "←+A・A・R",
          notes: ["上・中・構え移行"],
        },
        {
          name: "ムーンスレイ",
          command: "↙+A",
          notes: ["下段"],
        },
        {
          name: "バレリア・フルーレ",
          command: "←→+A・A・A",
          notes: ["上・上・中"],
        },
        {
          name: "バレリア・ロール",
          command: "←→+A・A・C",
          notes: ["上・上・下"],
        },
        {
          name: "バレリア・クードロワ",
          command: "←→+A・B・B",
          notes: ["上・中・中"],
        },
        {
          name: "グランスレイ",
          command: "←←+A",
          notes: ["下段"],
        },
        {
          name: "リベルスレイ",
          command: "↓↘→+A・A",
          notes: ["中・下"],
        },
        {
          name: "スコルピオン・ファーント",
          command: "B",
          notes: ["上段"],
        },
        {
          name: "ミリューファーント",
          command: "B・B",
          notes: ["上・上"],
        },
        {
          name: "ミリューファーント〜EF",
          command: "B・B・R",
          notes: ["上・上・構え移行"],
        },
        {
          name: "トロワミリューファーント",
          command: "B・B・B（溜め可）",
          notes: ["上・上・上"],
        },
        {
          name: "スパイラルファーント",
          command: "B・B・B（最大溜めで自動発動）",
          notes: ["上・上・中"],
        },
        {
          name: "フラッシュファーン",
          command: "→+B・B・B",
          notes: ["中・中・中"],
        },
        {
          name: "フラッシュファーン〜EF",
          command: "→+B・B・R",
          notes: ["中・中・構え移行"],
        },
        {
          name: "ボンナ・ウァンスレイ",
          command: "←+B",
          notes: ["上段"],
        },
        {
          name: "ルミーズファーン",
          command: "↓+B・B",
          notes: ["下・中"],
        },
        {
          name: "バテンストローク",
          command: "↘+B",
          notes: ["中段"],
        },
        {
          name: "ピラーファーント",
          command: "↙+B",
          notes: ["中段"],
        },
        {
          name: "ピラーファーント〜アップスタイル",
          command: "↙+B・B",
          notes: ["中・特殊動作"],
        },
        {
          name: "ピック・ファーント",
          command: "↙+B・B・B・B",
          notes: ["中・特殊動作・上・上"],
        },
        {
          name: "アップスタイル〜トゥー・ロール",
          command: "↙+B・B・C",
          notes: ["中・特殊動作・下"],
        },
        {
          name: "アップスタイル〜クリアスタイル",
          command: "↙+B・B・←←",
          notes: ["中・特殊動作・特殊動作"],
        },
        {
          name: "クードロワ",
          command: "→→+B",
          notes: ["中段"],
          skills: [
            {
              name: "トライファーント",
              command: "ヒット時にAB",
              notes: ["打撃投げ"],
            },
          ],
        },
        {
          name: "エイドファーント",
          command: "←→+B",
          notes: ["中段"],
          skills: [
            {
              name: "サクセショイン・ファーント",
              command: "ヒット時にAB",
              notes: ["中段"],
            },
          ],
        },
        {
          name: "マントナン・ファーント",
          command: "←←+B",
          notes: ["中段"],
        },
        {
          name: "マントナン・ファーント〜EF",
          command: "←←+B・R",
          notes: ["中・構え移行"],
        },
        {
          name: "プロシャン・ファーント",
          command: "←←+B・B",
          notes: ["中・上"],
        },
        {
          name: "プロシャン・ファーント〜EF",
          command: "←←+B・B・R",
          notes: ["中・上・構え移行"],
        },
        {
          name: "パワーグラデイション",
          command: "↓↘→+B・A",
          notes: ["中・中"],
        },
        {
          name: "レイピア",
          command: "↓↙←+B（溜め可）",
          notes: ["特殊動作"],
          skills: [
            {
              name: "エグル・ファーント",
              command: "A",
              notes: ["中段"],
            },
            {
              name: "アベイユ・ファーント",
              command: "B",
              notes: ["上段"],
            },
            {
              name: "ルカン・キック",
              command: "C",
              notes: ["下段"],
            },
            {
              name: "レイジングファーント",
              command: "最大溜めで自動発動",
              notes: ["G不能"],
            },
          ],
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
          name: "下段蹴り",
          command: "↓+C",
          notes: ["下段"],
        },
        {
          name: "足払い",
          command: "↙+C",
          notes: ["下段"],
        },
        {
          name: "EF（エレガンスフォーム）",
          command: "AR",
          notes: ["構え移行"],
          skills: [
            {
              name: "奥移動",
              command: "↑",
              notes: ["奥移動"],
              skills: [
                {
                  name: "エレガンススレイ",
                  command: "A",
                  notes: ["上段"],
                },
                {
                  name: "エレガンスファーント",
                  command: "C",
                  notes: ["中段"],
                },
              ],
            },
            {
              name: "手前移動",
              command: "↓",
              notes: ["手前移動"],
              skills: [
                {
                  name: "エレガンススレイ",
                  command: "A",
                  notes: ["上段"],
                },
                {
                  name: "エレガンスファーント",
                  command: "C",
                  notes: ["中段"],
                },
              ],
            },
            {
              name: "解除",
              command: "← or →",
              notes: ["構え解除"],
            },
            {
              name: "バレストラ",
              command: "A",
              notes: ["上段"],
            },
            {
              name: "スプラッシュファーント",
              command: "B・B・B・B・B・B・B・B・B",
              notes: ["中・上・中・上・中・上・中・上・中"],
            },
            {
              name: "ヒールカット",
              command: "C",
              notes: ["下段"],
            },
          ],
        },
        {
          name: "デュミナスフルーレ",
          command: "立ち途中にA",
          notes: ["上段"],
        },
        {
          name: "デュミナスストローク",
          command: "立ち途中にB",
          notes: ["中段"],
        },
        {
          name: "スキップキック",
          command: "立ち途中にC",
          notes: ["中段"],
        },
        {
          name: "サイドストローク",
          command: "軸移動中にA",
          notes: ["中段"],
        },
        {
          name: "ダウンストローク",
          command: "軸移動中にB",
          notes: ["中段"],
        },
        {
          name: "トゥー・ロール",
          command: "軸移動中にC",
          notes: ["下段"],
        },
        {
          name: "スレイヤーフルーレ",
          command: "AB",
          notes: ["上段"],
        },
        {
          name: "グランドストローク",
          command: "BC",
          notes: ["中段"],
        },
        {
          name: "ファーン・デ・モート",
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
          name: "リュッシュ・ファーント",
          command: "↓↘→+BC",
          notes: ["中・上・中・上・中・上・中・上・中"],
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "シャルロット - サムライスピリッツ閃 @ ウィキ - atwiki",
          href: "https://w.atwiki.jp/samuraispiritssen/pages/39.html",
        },
      ],
    },
    {
      title: "もっと詳しい動画",
      links: [
        {
          name: "サムライスピリッツ閃 シャルロット 技一覧 - YouTube",
          href: "https://youtu.be/kKfV8nDtdWA",
        },
      ],
    },
  ],
}
