import type { DataItem } from "../../../types"

export const reiMina: DataItem = {
  id: "rei-mina",
  name: "真鏡名ミナ",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "マブイウトシの構え",
          command: "↓↘→+斬",
          notes: ["構え中1〜3段階溜め、暴発の順に移行する"],
          tags: [{ name: "怒", color: 2 }],
          skills: [
            {
              name: "構えをやめる",
              command: "↓↘→+斬",
            },
            {
              name: "体貫弓",
              command: "L",
            },
            {
              name: "地這弓",
              command: "M",
            },
            {
              name: "天落弓",
              command: "H",
            },
            {
              name: "降宙弓",
              command: "蹴 or ←+蹴 or →+蹴",
              skills: [
                {
                  name: "降宙弓・発射",
                  command: "斬",
                },
              ],
            },
          ],
        },
        {
          name: "ユーリーの囁き",
          command: "↓↙←+斬",
        },
        {
          name: "ヤナウヮーチチ",
          command: "→↓↘+蹴",
        },
        {
          name: "イチミの鋭感",
          command: "↓↘→+蹴",
        },
        {
          name: "アラビの予兆",
          command: "↓↙←+蹴",
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "三角飛び",
          command: "空中画面端で↗",
          notes: ["ユーリーの囁き時も可"],
        },
      ],
    },
    {
      title: "武器飛ばし必殺技",
      titleColor: 2,
      skills: [
        {
          name: "スンガンの偏執",
          command: "↓↘→+MH",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "ヤナムンの慟哭",
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
          name: "SAMURAI SPIRITS 真鏡名ミナ - 究極攻略最前線",
          href: "https://gamers-high.com/samurai-spirits/character/mina.html",
        },
        {
          name: "真鏡名ミナ - SAMURAI SPIRITS user's Wiki*",
          href: "https://wikiwiki.jp/samurai2019/%E7%9C%9F%E5%A2%83%E5%90%8D%E3%83%9F%E3%83%8A",
        },
        {
          name: "真鏡名ミナ - SAMURAI SPIRITS公式サイト | コマンドリスト",
          href: "https://www.snk-corp.co.jp/official/samuraispirits/img/command/22.pdf",
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
