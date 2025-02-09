import type { DataItem } from "../../../types"

export const senSuzuhime: DataItem = {
  id: "sen-suzuhime",
  name: "鈴姫",
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
          name: "清流ノ水波",
          command: "A・A",
          notes: ["上・上"],
        },
        {
          name: "清流ノ白鷺",
          command: "A・B",
          notes: ["上・中"],
        },
        {
          name: "秋風三打",
          command: "→+A・A・B",
          notes: ["上・上・上"],
        },
        {
          name: "秋風夢奏",
          command: "→+A・A・↓+A",
          notes: ["上・上・上"],
        },
        {
          name: "山間ニ架カル月",
          command: "←+A・A",
          notes: ["上・上"],
        },
        {
          name: "夜ニ流ルル風",
          command: "↘+A・A・A",
          notes: ["上・上・中"],
        },
        {
          name: "夜ニ煙ル月",
          command: "↘+A・A・B",
          notes: ["上・上・中"],
        },
        {
          name: "夜ニ薫ル草葉",
          command: "↘+A・A・C",
          notes: ["上・上・下"],
        },
        {
          name: "雪下ヨリ芽吹ク花",
          command: "↙+A・A",
          notes: ["下・中"],
        },
        {
          name: "春ノ疾キ音",
          command: "←→+A",
          notes: ["中段"],
        },
        {
          name: "春ノ疾キ風",
          command: "←→+A（→入れっぱなし）",
          notes: ["中・特殊動作"],
          skills: [
            {
              name: "春風ニ逆ラフ燕",
              command: "A",
              notes: ["上段"],
            },
          ],
        },
        {
          name: "燃ユル秋ノ山々",
          command: "↓↘→+A・A・A",
          notes: ["上・上・上"],
        },
        {
          name: "縦斬り",
          command: "B",
          notes: ["中段"],
        },
        {
          name: "宵ニ照ル月",
          command: "B・B",
          notes: ["中・中"],
        },
        {
          name: "宵ニ咲く花",
          command: "B・C",
          notes: ["中・下"],
        },
        {
          name: "穂群ニ吹ク風",
          command: "→+B・B・A",
          notes: ["中・中・中"],
        },
        {
          name: "穂群三打",
          command: "→+B・B・B",
          notes: ["中・中・中"],
        },
        {
          name: "桜木ノ戯レ",
          command: "←+B・B・B",
          notes: ["中・中・中"],
        },
        {
          name: "桜木ノ息吹",
          command: "←+B・AB",
          notes: ["中・中"],
        },
        {
          name: "不知火",
          command: "↘+B",
          notes: ["中段"],
        },
        {
          name: "山際ニ沈ム月",
          command: "↙+B・B",
          notes: ["中・中"],
          skills: [
            {
              name: "山際ヨリ出ズル日",
              command: "ヒット時にAB",
              notes: ["打撃投げ"],
            },
          ],
        },
        {
          name: "猛ル白瀧ノ飛沫",
          command: "→→+B",
          notes: ["中段"],
        },
        {
          name: "猛ル白瀧ノ流レ",
          command: "→→+B（→入れっぱなし）",
          notes: ["中・特殊動作"],
          skills: [
            {
              name: "舞ウ瀧ノ水飛沫",
              command: "NA",
              notes: ["中段"],
            },
          ],
        },
        {
          name: "清キヲ流ルル紅葉",
          command: "←→+B・A",
          notes: ["中・下"],
        },
        {
          name: "清キニ舞ウ白魚",
          command: "←→+B・B",
          notes: ["中・中"],
        },
        {
          name: "桜雅",
          command: "↓↘→+B・A・A・B・B",
          notes: ["中・上・上・中・中"],
        },
        {
          name: "上段蹴り",
          command: "C",
          notes: ["上段"],
        },
        {
          name: "中段蹴り",
          command: "→+C",
          notes: ["中段"],
        },
        {
          name: "下段蹴り",
          command: "↓+C（溜め可）",
          notes: ["下段"],
        },
        {
          name: "脚払い",
          command: "↓+C（最大溜めで自動発動）",
          notes: ["下段"],
        },
        {
          name: "脚刈り",
          command: "↙+C",
          notes: ["下段"],
        },
        {
          name: "天ニ掛カル三日月",
          command: "↘+C・A（溜め可）",
          notes: ["上・中"],
        },
        {
          name: "天ニ掛カル満チ月",
          command: "↘+C・A（最大溜めで自動発動）",
          notes: ["上・G不能"],
        },
        {
          name: "天ニ光ル七星",
          command: "↘+C・B",
          notes: ["上・中"],
        },
        {
          name: "立花",
          command: "立ち途中にA",
          notes: ["中段"],
        },
        {
          name: "発笛",
          command: "立ち途中にB",
          notes: ["中段"],
        },
        {
          name: "破蹴",
          command: "立ち途中にC",
          notes: ["中段"],
        },
        {
          name: "夜霧",
          command: "軸移動中にA",
          notes: ["中段"],
          skills: [
            {
              name: "露ニ濡ルル朧夜",
              command: "ヒット時にAB",
              notes: ["打撃投げ"],
            },
          ],
        },
        {
          name: "桃撃",
          command: "軸移動中にB",
          notes: ["中段"],
        },
        {
          name: "輪転",
          command: "軸移動中にC",
          notes: ["下段"],
        },
        {
          name: "天上ニ舞イシ乙女",
          command: "AB",
          notes: ["上段"],
        },
        {
          name: "地ヨリ出デシ火ノ鬼",
          command: "BC",
          notes: ["中段"],
        },
        {
          name: "暁ニ映ル緋ノ月",
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
          name: "暗雲ヲ割ル雷",
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
          name: "鈴姫 - サムライスピリッツ閃 @ ウィキ - atwiki",
          href: "https://w.atwiki.jp/samuraispiritssen/pages/22.html",
        },
      ],
    },
    {
      title: "もっと詳しい動画",
      links: [
        {
          name: "サムライスピリッツ閃 鈴姫 技一覧 - YouTube",
          href: "https://youtu.be/drsAxHDmXx8",
        },
      ],
    },
  ],
}
