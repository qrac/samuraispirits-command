import type { DataItem } from "../../../types"

export const reiHanzo: DataItem = {
  id: "rei-hanzo",
  name: "服部半蔵",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "忍法 爆炎龍",
          command: "↓↙←+斬",
          tags: [{ name: "怒", color: 2 }],
        },
        {
          name: "烈風手裏剣",
          command: "空中で↓↘→+斬",
        },
        {
          name: "忍法 うつせみ天舞",
          command: "→↘↓↙←+L蹴",
        },
        {
          name: "忍法 うつせみ地斬",
          command: "→↘↓↙←+M蹴",
        },
        {
          name: "忍法 身代わりの術 -仏-（天舞）",
          command: "被ダメージ中→↘↓↙←→↘↓↙←+L蹴",
        },
        {
          name: "忍法 身代わりの術 -鬼-（地斬）",
          command: "被ダメージ中→↘↓↙←→↘↓↙←+M蹴",
        },
        {
          name: "モズ落とし",
          command: "近距離で→↓↘+斬",
        },
        {
          name: "モズ落とし -颯-",
          command: "踏み込み中近距離で→↓↘+H",
        },
        {
          name: "忍法 静音",
          command: "↓↓+斬",
        },
        {
          name: "忍法 猿舞",
          command: "←↓↙+斬 or 蹴",
        },
      ],
    },
    {
      title: "武器飛ばし必殺技",
      titleColor: 2,
      skills: [
        {
          name: "封じ手 微塵隠れ",
          command: "↓↘→+MH",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "真・モズ落とし -燼滅-",
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
          name: "SAMURAI SPIRITS 服部半蔵 - 究極攻略最前線",
          href: "https://gamers-high.com/samurai-spirits/character/hanzo.html",
        },
        {
          name: "服部半蔵 - SAMURAI SPIRITS user's Wiki*",
          href: "https://wikiwiki.jp/samurai2019/%E6%9C%8D%E9%83%A8%E5%8D%8A%E8%94%B5",
        },
        {
          name: "服部半蔵 - SAMURAI SPIRITS公式サイト | コマンドリスト",
          href: "https://www.snk-corp.co.jp/official/samuraispirits/img/command/03.pdf",
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
