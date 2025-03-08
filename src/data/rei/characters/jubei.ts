import type { DataItem } from "../../../types"

export const reiJubei: DataItem = {
  id: "rei-jubei",
  name: "柳生十兵衛",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "喝咄 水月刀",
          command: "↓↘→+斬",
        },
        {
          name: "二ッ角羅刀",
          command: "→↓↘+斬",
          tags: [{ name: "怒", color: 2 }],
        },
        {
          name: "八相発破",
          command: "→+斬連打",
        },
        {
          name: "柳生 心眼刀・水月",
          command: "↓↙←+L",
        },
        {
          name: "柳生 心眼刀・相破",
          command: "↓↙←+M",
        },
        {
          name: "柳生 心眼刀・天羅",
          command: "↓↙←+H",
        },
      ],
    },
    {
      title: "武器飛ばし必殺技",
      titleColor: 2,
      skills: [
        {
          name: "絶 水月刀",
          command: "↓↘→+MH",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "新陰流奥義・羅角双崩斬",
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
          name: "SAMURAI SPIRITS 柳生十兵衛 - 究極攻略最前線",
          href: "https://gamers-high.com/samurai-spirits/character/jubei.html",
        },
        {
          name: "柳生十兵衛 - SAMURAI SPIRITS user's Wiki*",
          href: "https://wikiwiki.jp/samurai2019/%E6%9F%B3%E7%94%9F%E5%8D%81%E5%85%B5%E8%A1%9B",
        },
        {
          name: "柳生十兵衛 - SAMURAI SPIRITS公式サイト | コマンドリスト",
          href: "https://www.snk-corp.co.jp/official/samuraispirits/img/command/07.pdf",
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
