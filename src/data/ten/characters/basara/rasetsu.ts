import type { DataItem } from "../../../../types"

export const tenBasaraRasetsu: DataItem = {
  id: "ten-basara-rasetsu",
  name: "首斬り破沙羅（羅刹）",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "地刺し",
          command: "↓↘→+斬",
        },
        {
          name: "空刺し",
          command: "空中で↓↘→+斬",
        },
        {
          name: "影出",
          command: "→↓↘+斬",
        },
        {
          name: "影騙し",
          command: "←↓↙+斬 or D",
        },
        {
          name: "刺し足",
          command: "空中で↓+D",
        },
        {
          name: "影吸い",
          command: "↓↙←+斬 or D",
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "三角飛び",
          command: "空中画面端で↗ or → or ↘",
        },
        {
          name: "頭骨割り",
          command: "空中で↙ or ↘+D",
        },
      ],
    },
    {
      title: "武器飛ばし技",
      titleColor: 2,
      skills: [
        {
          name: "影舞い・夢彈",
          command: "←→↘↓+AB",
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "攻略～首斬り破沙羅～ サムライスピリッツ天草降臨 - ぽんしゃぶ弐号",
          href: "https://www5b.biglobe.ne.jp/~hitokiri/kouryku/09basara.htm",
        },
      ],
    },
    /*{
      title: "もっと詳しい動画",
      links: [
        {
          name: "",
          href: "https://youtu.be/xxx",
        },
      ],
    },*/
  ],
}
