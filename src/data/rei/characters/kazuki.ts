import type { DataItem } from "../../../types"

export const reiKazuki: DataItem = {
  id: "rei-kazuki",
  name: "風間火月",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "災炎",
          command: "↓↙←+蹴",
          notes: ["3つまでストック可能"],
        },
        {
          name: "焦熱魂",
          command: "↓↘→+斬 or 蹴",
        },
        {
          name: "大爆殺",
          command: "→↓↘+斬 or 蹴",
          tags: [{ name: "怒", color: 2 }],
        },
        {
          name: "炎滅",
          command: "←↓↙+斬 or 蹴",
        },
        {
          name: "炎返し",
          command: "炎ストック時 被吹っ飛び中にL蹴",
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
          name: "炎牙",
          command: "空中で↓+M",
        },
      ],
    },
    {
      title: "武器飛ばし必殺技",
      titleColor: 2,
      skills: [
        {
          name: "暴爆 火炎撃",
          command: "↓↘→+MH",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "炎邪覚醒",
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
          name: "SAMURAI SPIRITS 風間火月 - 究極攻略最前線",
          href: "https://gamers-high.com/samurai-spirits/character/kazuki.html",
        },
        {
          name: "風間火月 - SAMURAI SPIRITS user's Wiki*",
          href: "https://wikiwiki.jp/samurai2019/%E9%A2%A8%E9%96%93%E7%81%AB%E6%9C%88",
        },
        {
          name: "風間火月 - SAMURAI SPIRITS公式サイト | コマンドリスト",
          href: "https://www.snk-corp.co.jp/official/samuraispirits/img/command/20.pdf",
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
