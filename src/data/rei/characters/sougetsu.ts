import type { DataItem } from "../../../types"

export const reiSougetsu: DataItem = {
  id: "rei-sougetsu",
  name: "風間蒼月",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "月光",
          command: "→↓↘+斬",
          tags: [{ name: "怒", color: 2 }],
        },
        {
          name: "浮月",
          command: "↓↘→+斬",
          skills: [
            {
              name: "浮月操水",
              command: "",
              notes: ["ボタン継続押し+レバーで操作"],
            },
          ],
        },
        {
          name: "月隠れ",
          command: "↓↙←+斬",
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
          name: "消波・風月斬",
          command: "↓↘→+MH",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "月華・水牢陣",
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
          name: "SAMURAI SPIRITS 風間蒼月 - 究極攻略最前線",
          href: "https://gamers-high.com/samurai-spirits/character/sogetsu.html",
        },
        {
          name: "風間蒼月 - SAMURAI SPIRITS user's Wiki*",
          href: "https://wikiwiki.jp/samurai2019/%E9%A2%A8%E9%96%93%E8%92%BC%E6%9C%88",
        },
        {
          name: "風間蒼月 - SAMURAI SPIRITS公式サイト | コマンドリスト",
          href: "https://www.snk-corp.co.jp/official/samuraispirits/img/command/23.pdf",
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
