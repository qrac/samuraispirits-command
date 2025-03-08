import type { DataItem } from "../../../types"

export const reiUkyo: DataItem = {
  id: "rei-ukyo",
  name: "橘右京",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "秘剣 ツバメ返し",
          command: "空中で↙↓↘→+斬",
          tags: [{ name: "怒", color: 2 }],
        },
        {
          name: "秘剣 ささめゆき",
          command: "↓↙←+斬",
        },
        {
          name: "非剣 ささめゆき",
          command: "↓↙←+蹴",
        },
        {
          name: "秘剣 朧刀",
          command: "↓↘→+斬",
        },
      ],
    },
    {
      title: "武器飛ばし必殺技",
      titleColor: 2,
      skills: [
        {
          name: "ツバメ六連",
          command: "↓↘→+MH",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "八重霞",
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
          name: "SAMURAI SPIRITS 橘右京 - 究極攻略最前線",
          href: "https://gamers-high.com/samurai-spirits/character/ukyo.html",
        },
        {
          name: "橘右京 - SAMURAI SPIRITS user's Wiki*",
          href: "https://wikiwiki.jp/samurai2019/%E6%A9%98%E5%8F%B3%E4%BA%AC",
        },
        {
          name: "橘右京 - SAMURAI SPIRITS公式サイト | コマンドリスト",
          href: "https://www.snk-corp.co.jp/official/samuraispirits/img/command/05.pdf",
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
