import type { DataItem } from "../../../types"

export const reiCharlotte: DataItem = {
  id: "rei-charlotte",
  name: "シャルロット",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "トライスラッシュ",
          command: "↓↘→+斬",
          tags: [{ name: "怒", color: 2 }],
          notes: ["ボタン継続押しでタメ可能"],
        },
        {
          name: "パワーグラデーション",
          command: "→↓↘+斬",
        },
        {
          name: "スプラッシュファーント",
          command: "→+斬連打",
        },
        {
          name: "バイオネットラージュ",
          command: "↓↙←+斬",
        },
        {
          name: "リオンランセ",
          command: "↓↘→+蹴",
        },
      ],
    },
    {
      title: "武器飛ばし必殺技",
      titleColor: 2,
      skills: [
        {
          name: "スプラッシュグラデーション",
          command: "↓↘→+MH",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "ラ・ダンス・ドゥ・ラ・ローズ",
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
          name: "SAMURAI SPIRITS シャルロット - 究極攻略最前線",
          href: "https://gamers-high.com/samurai-spirits/character/charlotte.html",
        },
        {
          name: "シャルロット - SAMURAI SPIRITS user's Wiki*",
          href: "https://wikiwiki.jp/samurai2019/%E3%82%B7%E3%83%A3%E3%83%AB%E3%83%AD%E3%83%83%E3%83%88",
        },
        {
          name: "シャルロット - SAMURAI SPIRITS公式サイト | コマンドリスト",
          href: "https://www.snk-corp.co.jp/official/samuraispirits/img/command/09.pdf",
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
