import type { DataItem } from "../../../types"

export const reiYoshitora: DataItem = {
  id: "rei-yoshitora",
  name: "徳川慶寅",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "壱の太刀 撫子",
          command: "↓↘→+斬",
          tags: [{ name: "怒", color: 2 }],
        },
        {
          name: "弐の太刀 白百合",
          command: "→↓↘+斬",
        },
        {
          name: "参の太刀 牡丹",
          command: "空中で↓↘→+斬",
        },
        {
          name: "四の太刀 椿",
          command: "←↓↙+斬",
        },
        {
          name: "五の太刀 朝顔",
          command: "↓↙←+斬",
        },
        {
          name: "六の太刀 夕顔",
          command: "→↓↘+蹴",
        },
        {
          name: "七の太刀 遊蝶華",
          command: "壱〜六をすべて当て終わったラウンドで→↘↓↙←→+LM",
        },
      ],
    },
    {
      title: "武器飛ばし必殺技",
      titleColor: 2,
      skills: [
        {
          name: "葵",
          command: "↓↘→+MH",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "百花繚乱",
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
          name: "SAMURAI SPIRITS 徳川慶寅 - 究極攻略最前線",
          href: "https://gamers-high.com/samurai-spirits/character/yoshitora.html",
        },
        {
          name: "徳川慶寅 - SAMURAI SPIRITS user's Wiki*",
          href: "https://wikiwiki.jp/samurai2019/%E5%BE%B3%E5%B7%9D%E6%85%B6%E5%AF%85",
        },
        {
          name: "徳川慶寅 - SAMURAI SPIRITS公式サイト | コマンドリスト",
          href: "https://www.snk-corp.co.jp/official/samuraispirits/img/command/13.pdf",
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
