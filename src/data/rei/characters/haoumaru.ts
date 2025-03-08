import type { DataItem } from "../../../types"

export const reiHaoumaru: DataItem = {
  id: "rei-haoumaru",
  name: "覇王丸",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "奥義 旋風裂斬",
          command: "↓↘→+斬",
        },
        {
          name: "奥偽 旋風裂斬",
          command: "↓↘→+蹴",
        },
        {
          name: "奥義 弧月斬",
          command: "→↓↘+斬",
          tags: [{ name: "怒", color: 2 }],
        },
        {
          name: "奥義 疾風弧月斬",
          command: "踏み込み中に→↓↘+斬",
          tags: [{ name: "怒", color: 2 }],
        },
        {
          name: "奥義 烈震斬",
          command: "←↓↙+斬",
        },
        {
          name: "酒攻撃",
          command: "↓↙←+蹴",
        },
      ],
    },
    {
      title: "武器飛ばし必殺技",
      titleColor: 2,
      skills: [
        {
          name: "天覇凄煌斬",
          command: "↓↘→+MH",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "天覇封神斬",
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
          name: "SAMURAI SPIRITS 覇王丸 - 究極攻略最前線",
          href: "https://gamers-high.com/samurai-spirits/character/haohmaru.html",
        },
        {
          name: "覇王丸 - SAMURAI SPIRITS user's Wiki*",
          href: "https://wikiwiki.jp/samurai2019/%E8%A6%87%E7%8E%8B%E4%B8%B8",
        },
        {
          name: "覇王丸 - SAMURAI SPIRITS公式サイト | コマンドリスト",
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
