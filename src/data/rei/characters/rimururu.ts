import type { DataItem } from "../../../types"

export const reiRimururu: DataItem = {
  id: "rei-rimururu",
  name: "リムルル",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "コンル メム",
          command: "↓↓+斬",
        },
        {
          name: "コンル シラル",
          command: "空中で↓+斬",
        },
        {
          name: "ルプシ クアレ・ニシ",
          command: "↓↘→+L or M",
        },
        {
          name: "ルプシ クアレ・トィトィ",
          command: "↓↘→+H",
        },
        {
          name: "コンル ノンノ",
          command: "→↓↘+斬",
          notes: ["怒り時Hで強化"],
        },
        {
          name: "ルプシ トゥム",
          command: "↓↙←+斬",
        },
        {
          name: "カムイ シトゥキ",
          command: "←↓↙+斬",
        },
        {
          name: "ウプン オプ",
          command: "→+斬連打",
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
          name: "ルプシ カムイ エムシ・トィトィ",
          command: "↓↘→+MH",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "ポロ コンル トゥルセレ",
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
          name: "SAMURAI SPIRITS リムルル - 究極攻略最前線",
          href: "https://gamers-high.com/samurai-spirits/character/rimururu.html",
        },
        {
          name: "リムルル - SAMURAI SPIRITS user's Wiki*",
          href: "https://wikiwiki.jp/samurai2019/%E3%83%AA%E3%83%A0%E3%83%AB%E3%83%AB",
        },
        {
          name: "リムルル - SAMURAI SPIRITS公式サイト | コマンドリスト",
          href: "https://www.snk-corp.co.jp/official/samuraispirits/img/command/17.pdf",
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
