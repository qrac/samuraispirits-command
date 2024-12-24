import type { DataItem } from "../../../types"

export const senRimururu: DataItem = {
  id: "sen-rimururu",
  name: "リムルル",
  groups: [
    {
      title: "固有技・必殺技",
      skills: [
        {
          name: "横斬り",
          command: "A",
          notes: ["上段"],
        },
        {
          name: "切り返し",
          command: "A・A",
          notes: ["上・上"],
        },
        {
          name: "サロルンリムセ",
          command: "A・A・C",
          notes: ["上・上・下"],
        },
        {
          name: "ルプシテケ",
          command: "A・A・AB",
          notes: ["上・上・中"],
        },
        {
          name: "クリムセ",
          command: "A・↓+A・C",
          notes: ["上・下・中"],
        },
        {
          name: "ユップケエムシリムセ",
          command: "←+A・A",
          notes: ["上・中"],
        },
        {
          name: "エムシリムセ",
          command: "←+A・B",
          notes: ["上・上"],
        },
        {
          name: "流閃",
          command: "屈中に↘+A・A",
          notes: ["下・中"],
        },
        {
          name: "チキチャ",
          command: "↘+A・C・AB",
          notes: ["上・上・上"],
        },
        {
          name: "ニソルチュイェ",
          command: "↙+A・B・C",
          notes: ["下・上・下"],
        },
        {
          name: "イメラッ",
          command: "↙+A・B・AB",
          notes: ["下・上・中"],
        },
        {
          name: "裏拳",
          command: "←←+A",
          notes: ["上段"],
        },
        {
          name: "裏拳〜タクネエムシ",
          command: "←←+A・A",
          notes: ["上・上"],
        },
        {
          name: "裏拳〜氷滑り",
          command: "←←+A・→",
          notes: ["上・特殊動作"],
        },
        {
          name: "カウカウコルイフンケ",
          command: "↓↙+A・A・A・B",
          notes: ["上・上・上・中"],
          skills: [
            {
              name: "カウカウチュラニチウコルイフンケ",
              command: "1〜3段目中にAB",
              notes: ["中段"],
            },
          ],
        },
        {
          name: "縦斬り",
          command: "B",
          notes: ["中段"],
        },
        {
          name: "イソコロアミ",
          command: "B・B",
          notes: ["中・中"],
        },
        {
          name: "ヤムレラ",
          command: "B・C",
          notes: ["中・上"],
        },
        {
          name: "ピリカコンル",
          command: "→+B・C・AB",
          notes: ["上・下・中"],
        },
        {
          name: "レタラコンルイクシペ",
          command: "←+B",
          notes: ["中段"],
        },
        {
          name: "レクッチャリムセ",
          command: "↘+B・B・C",
          notes: ["中・中・上"],
        },
        {
          name: "ニシコトロチャ",
          command: "↘+B・C・AB",
          notes: ["中・下・上"],
        },
        {
          name: "トイトイコルイケスイ",
          command: "↙+B・B・C",
          notes: ["中・中・下"],
        },
        {
          name: "コンルリムセ",
          command: "→→+B・C",
          notes: ["中・中"],
        },
        {
          name: "レタラクンネニシ",
          command: "←←+B",
          notes: ["中段"],
        },
        {
          name: "レタラクンネニシ〜氷滑り",
          command: "←←+B・→",
          notes: ["中・特殊動作"],
        },
        {
          name: "レタラクンネチュプカムイ",
          command: "←←+B・C",
          notes: ["中・中"],
        },
        {
          name: "回し蹴り",
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
          name: "氷円撃",
          command: "C・B",
          notes: ["上・中"],
        },
        {
          name: "雪滑り",
          command: "↓↘",
          notes: ["特殊動作"],
          skills: [
            {
              name: "ウパシコルイクシペ",
              command: "A・C・C・B",
              notes: ["特中・下・下・中"],
            },
            {
              name: "オキムンペリムセ",
              command: "A・C・C・C",
              notes: ["特中・下・下・下"],
            },
            {
              name: "エライライコルオプ",
              command: "B・A・C",
              notes: ["中・特中・中"],
            },
          ],
        },
        {
          name: "氷滑り",
          command: "↓↘→",
          notes: ["特殊動作"],
          skills: [
            {
              name: "コンルイクシペ",
              command: "A",
              notes: ["上段"],
            },
            {
              name: "コンルイクシペ〜氷滑り",
              command: "A・→",
              notes: ["上・特殊動作"],
            },
            {
              name: "ルプシテケ",
              command: "B",
              notes: ["中段"],
            },
            {
              name: "ウパシノンノ",
              command: "C",
              notes: ["下段"],
            },
          ],
        },
        {
          name: "春牙",
          command: "立ち途中にA",
          notes: ["中段"],
        },
        {
          name: "発牙",
          command: "立ち途中にB",
          notes: ["中段"],
        },
        {
          name: "跳脚",
          command: "立ち途中にC",
          notes: ["中段"],
        },
        {
          name: "飛蝶円",
          command: "軸移動中にA",
          notes: ["中段"],
        },
        {
          name: "飛蝶撃",
          command: "軸移動中にB",
          notes: ["中段"],
        },
        {
          name: "土還り",
          command: "軸移動中にC",
          notes: ["下段"],
        },
        {
          name: "ペケレチュプカムイ",
          command: "AB",
          notes: ["上段"],
        },
        {
          name: "クンネチュプカムイ",
          command: "BC",
          notes: ["中段"],
        },
        {
          name: "カントイメラッ",
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
          name: "トットキウェンテ",
          command: "↓↘→+BC",
          notes: ["中・打撃投げ"],
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "リムルル - サムライスピリッツ閃 @ ウィキ - atwiki",
          href: "https://w.atwiki.jp/samuraispiritssen/pages/43.html",
        },
      ],
    },
    {
      title: "もっと詳しい動画",
      links: [
        {
          name: "サムライスピリッツ閃 リムルル 技一覧 - YouTube",
          href: "https://youtu.be/lFWzMiFstWk",
        },
      ],
    },
  ],
}
