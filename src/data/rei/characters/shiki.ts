import type { DataItem } from "../../../types"

export const reiShiki: DataItem = {
  id: "rei-shiki",
  name: "色",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "露祓",
          command: "↓↘→+斬",
          tags: [{ name: "怒", color: 2 }],
          skills: [
            {
              name: "雫狩",
              command: "↓↘→+斬",
              tags: [{ name: "怒", color: 2 }],
            },
          ],
        },
        {
          name: "天咆輪・陽",
          command: "→↓↘+斬",
        },
        {
          name: "黄泉落とし",
          command: "→↓↘+蹴",
        },
        {
          name: "蓮華舞・昇華",
          command: "↓↙←+斬",
        },
        {
          name: "蓮華舞・忘鐘",
          command: "←↓↙+斬",
        },
        {
          name: "刹那",
          command: "↓↓+斬",
        },
      ],
    },
    {
      title: "武器飛ばし必殺技",
      titleColor: 2,
      skills: [
        {
          name: "天魔波旬",
          command: "↓↘→+MH",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "五蘊無明",
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
          name: "SAMURAI SPIRITS 色 - 究極攻略最前線",
          href: "https://gamers-high.com/samurai-spirits/character/shiki.html",
        },
        {
          name: "色 - SAMURAI SPIRITS user's Wiki*",
          href: "https://wikiwiki.jp/samurai2019/%E8%89%B2",
        },
        {
          name: "色 - SAMURAI SPIRITS公式サイト | コマンドリスト",
          href: "https://www.snk-corp.co.jp/official/samuraispirits/img/command/12.pdf",
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
