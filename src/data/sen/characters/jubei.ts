import type { DataItem } from "../../../types"

export const senJubei: DataItem = {
  id: "sen-jubei",
  name: "柳生十兵衛",
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
          name: "一刀二文字斬り",
          command: "A・A",
          notes: ["上・上"],
        },
        {
          name: "大震撃",
          command: "→+A・AB",
          notes: ["上・中"],
        },
        {
          name: "鬼削ぎ",
          command: "←+A・A・A",
          notes: ["中・下・中"],
        },
        {
          name: "綱崩し",
          command: "←+A・A・C",
          notes: ["中・下・下"],
        },
        {
          name: "柳生双月斬",
          command: "↓+A・AB",
          notes: ["下・中"],
        },
        {
          name: "見切り通撃",
          command: "↘+A・B",
          notes: ["上・中"],
        },
        {
          name: "見切り中段通撃",
          command: "↘+A・C",
          notes: ["上・下"],
        },
        {
          name: "猛撃二段",
          command: "↙+A",
          notes: ["下段"],
        },
        {
          name: "三連ね斬り",
          command: "←→+A・A・AB",
          notes: ["上・上・下"],
        },
        {
          name: "縦斬り",
          command: "B",
          notes: ["中段"],
        },
        {
          name: "柳生双角撃",
          command: "B・B",
          notes: ["中・（中・中）"],
        },
        {
          name: "叢雲双連",
          command: "↙+B・AB",
          notes: ["中・上"],
        },
        {
          name: "叢雲",
          command: "↙+B・AB・BC（ジャスト入力）",
          notes: ["中・上・中"],
        },
        {
          name: "叢雲掃連",
          command: "↙+B・↓+A",
          notes: ["中・下"],
        },
        {
          name: "鳳翼斬",
          command: "←←+B",
          notes: ["中段"],
        },
        {
          name: "鮫牙",
          command: "→→+B",
          notes: ["中段"],
        },
        {
          name: "轟震斬",
          command: "←+B・B・A",
          notes: ["中・中・中"],
        },
        {
          name: "追震双刃",
          command: "←→+B",
          notes: ["中段"],
        },
        {
          name: "断残撃",
          command: "↘+B",
          notes: ["中段"],
        },
        {
          name: "柳生両刀乱舞",
          command: "↓↙←+B・B・B・AB",
          notes: ["中・中・上・中"],
        },
        {
          name: "上段蹴り",
          command: "C",
          notes: ["上段"],
        },
        {
          name: "中段蹴り",
          command: "←+C",
          notes: ["中段"],
        },
        {
          name: "下段蹴り",
          command: "↓+C",
          notes: ["下段"],
        },
        {
          name: "刀閃巡り",
          command: "↙+C・AB",
          notes: ["下・上"],
        },
        {
          name: "覇神斬",
          command: "立ち途中にA・A",
          notes: ["中・中"],
        },
        {
          name: "虎吼閃",
          command: "立ち途中にB",
          notes: ["（中・中）"],
        },
        {
          name: "片翼斬",
          command: "軸移動中にA",
          notes: ["下段"],
        },
        {
          name: "甲突打",
          command: "軸移動中にB",
          notes: ["中段"],
        },
        {
          name: "柳生歩法",
          command: "↓↘→",
          notes: ["特殊動作"],
          skills: [
            {
              name: "壱刀閃撃",
              command: "A",
              notes: ["上段"],
            },
            {
              name: "八相発破",
              command: "B・B・B・B・B・B",
              notes: ["中・中・中・中・中・中"],
              skills: [
                {
                  name: "追震双刃 改",
                  command: "2〜5段目中にA",
                  notes: ["中段"],
                },
                {
                  name: "八相弐刀斬",
                  command: "1段目ヒット時にA",
                  notes: ["中・打撃投げ"],
                },
              ],
            },
          ],
        },
        {
          name: "岩砕爪斬",
          command: "AB",
          notes: ["上段"],
        },
        {
          name: "二重椿",
          command: "BC",
          notes: ["中段"],
        },
        {
          name: "柳生一刃咲き",
          command: "ABCR",
          notes: ["G不能"],
        },
        {
          name: "柳生心眼刀・相破",
          command: "←+AB",
          notes: ["上中段返し技"],
        },
        {
          name: "柳生心眼刀・天羅",
          command: "↙+BC",
          notes: ["下段返し技"],
        },
      ],
    },
    {
      title: "怒り爆発中専用技",
      titleColor: 2,
      skills: [
        {
          name: "心眼一刀",
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
          name: "柳生十兵衛 - サムライスピリッツ閃 @ ウィキ - atwiki",
          href: "https://w.atwiki.jp/samuraispiritssen/pages/42.html",
        },
      ],
    },
    {
      title: "もっと詳しい動画",
      links: [
        {
          name: "サムライスピリッツ閃 柳生十兵衛 技一覧 - YouTube",
          href: "https://youtu.be/h3n1WSvEBfg",
        },
      ],
    },
  ],
}
