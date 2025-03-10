import type { DataItem } from "../../../types"

export const reiGongsunli: DataItem = {
  id: "rei-gongsunli",
  name: "公孫離",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "狐鷲断霞",
          command: "↓↘→+斬 or 蹴",
          skills: [
            {
              name: "瞬歩",
              command: "↓↘→+斬",
            },
            {
              name: "霜葉舞",
              command: "→←↙↓↘→+H蹴",
              notes: ["秘奥義 / 1試合につき1回のみ使用可能"],
            },
          ],
        },
        {
          name: "岑中帰月",
          command: "↓↙←+斬（空中も可）",
          skills: [
            {
              name: "瞬歩",
              command: "↓↘→+斬",
            },
            {
              name: "霜葉舞",
              command: "→←↙↓↘→+H蹴",
              notes: ["秘奥義 / 1試合につき1回のみ使用可能"],
            },
          ],
        },
        {
          name: "晩雲落",
          command: "↓↙←+蹴",
          notes: ["3回当てた次は強化版"],
          tags: [{ name: "怒", color: 2 }],
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "転蓬舞",
          command: "↘+H",
        },
      ],
    },
    {
      title: "武器飛ばし必殺技",
      titleColor: 2,
      skills: [
        {
          name: "風傾煙散",
          command: "↓↘→+MH",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "霜葉舞",
          command: "→←↙↓↘→+H蹴",
          notes: ["狐鷲断霞 or 岑中帰月で傘を設置している場合のみ発動可能"],
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "SAMURAI SPIRITS 公孫離 - 究極攻略最前線",
          href: "https://gamers-high.com/samurai-spirits/character/haohmaru.html",
        },
        {
          name: "公孫離 - SAMURAI SPIRITS user's Wiki*",
          href: "https://wikiwiki.jp/samurai2019/%E8%A6%87%E7%8E%8B%E4%B8%B8",
        },
        {
          name: "公孫離 - SAMURAI SPIRITS公式サイト | コマンドリスト",
          href: "https://www.snk-corp.co.jp/official/samuraispirits/img/command/01.pdf",
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
