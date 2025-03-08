import type { DataItem } from "../../../types"

export const reiNakoruru: DataItem = {
  id: "rei-nakoruru",
  name: "ナコルル",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "アンヌ ムツベ",
          command: "←↙↓+斬",
          tags: [{ name: "怒", color: 2 }],
        },
        {
          name: "レラ ムツベ",
          command: "↓↘→+斬",
          tags: [{ name: "怒", color: 2 }],
        },
        {
          name: "カムイ リムセ",
          command: "←↓↙+斬",
          skills: [
            {
              name: "カムイ リムセ返し",
              command: "斬 or 蹴",
            },
          ],
        },
        {
          name: "アムベヤトロ",
          command: "↓↙←+斬",
        },
        {
          name: "鷹につかまる",
          command: "↓↙←+蹴",
          skills: [
            {
              name: "鷹につかまり攻撃",
              command: "斬",
            },
            {
              name: "鷹から降りる",
              command: "N or ← or →+蹴",
            },
            {
              name: "カムイ フム ケスプ",
              command: "↙ or ↓ or ↘+蹴",
            },
            {
              name: "カムイ ムツベ",
              command: "MH",
              tags: [{ name: "怒", color: 2 }],
            },
          ],
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
        {
          name: "カムイ フム ケスプ",
          command: "空中で↙ or ↓ or ↘+蹴",
        },
        {
          name: "レラ キシマ テク",
          command: "空中近距離で→+蹴",
        },
      ],
    },
    {
      title: "武器飛ばし必殺技",
      titleColor: 2,
      skills: [
        {
          name: "エレルシ カムイ リムセ",
          command: "↓↘→+MH",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "アル レタラ カムイフム マキリ",
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
          name: "SAMURAI SPIRITS ナコルル - 究極攻略最前線",
          href: "https://gamers-high.com/samurai-spirits/character/nakoruru.html",
        },
        {
          name: "ナコルル - SAMURAI SPIRITS user's Wiki*",
          href: "https://wikiwiki.jp/samurai2019/%E3%83%8A%E3%82%B3%E3%83%AB%E3%83%AB",
        },
        {
          name: "ナコルル - SAMURAI SPIRITS公式サイト | コマンドリスト",
          href: "https://www.snk-corp.co.jp/official/samuraispirits/img/command/02.pdf",
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
