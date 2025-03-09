import type { DataItem } from "../../../types"

export const reiTamtam: DataItem = {
  id: "rei-tamtam",
  name: "タムタム",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "パグナ・パグナ",
          command: "→+斬連打",
        },
        {
          name: "ムーラ・ムーラ",
          command: "↓↘→+L or M",
          notes: ["3回まで連続入力可能"],
        },
        {
          name: "アハウ・ガブル",
          command: "→↓↘+斬",
          tags: [{ name: "怒", color: 2 }],
        },
        {
          name: "パグナ・デオス",
          command: "←↓↙+斬",
        },
        {
          name: "ガブル・ガブル",
          command: "近距離で↓↘→+蹴",
        },
      ],
    },
    {
      title: "武器飛ばし必殺技",
      titleColor: 2,
      skills: [
        {
          name: "アハウ・ティウワカン",
          command: "↓↘→+MH",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "マグナス・ディオス・ザール",
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
          name: "SAMURAI SPIRITS タムタム - 究極攻略最前線",
          href: "https://gamers-high.com/samurai-spirits/character/tamtam.html",
        },
        {
          name: "タムタム - SAMURAI SPIRITS user's Wiki*",
          href: "https://wikiwiki.jp/samurai2019/%E3%82%BF%E3%83%A0%E3%82%BF%E3%83%A0",
        },
        {
          name: "タムタム - SAMURAI SPIRITS公式サイト | コマンドリスト",
          href: "https://www.snk-corp.co.jp/official/samuraispirits/img/command/08.pdf",
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
