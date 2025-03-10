import type { DataItem } from "../../../types"

export const reiBasara: DataItem = {
  id: "rei-basara",
  name: "首斬り破沙羅",
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
          name: "鵺魂",
          command: "↓↘→+蹴",
        },
        {
          name: "影出",
          command: "→↓↘+斬",
          notes: ["H版は相手の位置をサーチ"],
          tags: [{ name: "怒", color: 2 }],
        },
        {
          name: "影騙し",
          command: "←↓↙+斬 or L蹴 or M蹴 or H蹴",
        },
        {
          name: "影吸い",
          command: "↓↙←+蹴",
          notes: ["レバー左右で移動可"],
        },
        {
          name: "友引",
          command: "近距離で→↓↘+蹴",
        },
        {
          name: "刺し足",
          command: "空中で↓+蹴",
        },
        {
          name: "頭骨割り",
          command: "空中で↙ or ↘+蹴",
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "三角飛び",
          command: "空中画面端で↗",
        },
      ],
    },
    {
      title: "武器飛ばし必殺技",
      titleColor: 2,
      skills: [
        {
          name: "影舞い・夢彈",
          command: "↓↘→+MH",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "影舞い・深潭",
          command: "→←↙↓↘→+H蹴",
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "SAMURAI SPIRITS 首斬り破沙羅 - 究極攻略最前線",
          href: "https://gamers-high.com/samurai-spirits/character/basara.html",
        },
        {
          name: "首斬り破沙羅 - SAMURAI SPIRITS user's Wiki*",
          href: "https://wikiwiki.jp/samurai2019/%E9%A6%96%E6%96%AC%E3%82%8A%E7%A0%B4%E6%B2%99%E7%BE%85",
        },
        {
          name: "首斬り破沙羅 - SAMURAI SPIRITS公式サイト | コマンドリスト",
          href: "https://www.snk-corp.co.jp/official/samuraispirits/img/command/19.pdf",
        },
      ],
    },
    /*{
      title: "もっと詳しい動画",
      links: [
        {
          name: "xxxx - YouTube",
          href: "https://youtu.be/xxxx",
        },
      ],
    },*/
  ],
}
