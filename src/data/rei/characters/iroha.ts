import type { DataItem } from "../../../types"

export const reiIroha: DataItem = {
  id: "rei-iroha",
  name: "いろは",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "風斬",
          command: "↓↘→+斬 or 蹴（空中も可）",
        },
        {
          name: "風車",
          command: "↓↙←+斬（空中も可）",
        },
        {
          name: "露時雨",
          command: "→↓↘+斬（空中も可）",
          tags: [{ name: "怒", color: 2 }],
        },
        {
          name: "雨葵",
          command: "↓↙←→+蹴",
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "二段飛び",
          command: "ジャンプ頂点付近で↖ or ↑ or ↗",
        },
        {
          name: "羽鉄山",
          command: "←+蹴",
          notes: ["キャンセル可"],
        },
      ],
    },
    {
      title: "武器飛ばし必殺技",
      titleColor: 2,
      skills: [
        {
          name: "風飛落",
          command: "↓↘→+MH",
          notes: ["レバー左右で移動可"],
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "夕鶴の舞",
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
          name: "SAMURAI SPIRITS いろは - 究極攻略最前線",
          href: "https://gamers-high.com/samurai-spirits/character/iroha.html",
        },
        {
          name: "いろは - SAMURAI SPIRITS user's Wiki*",
          href: "https://wikiwiki.jp/samurai2019/%E3%81%84%E3%82%8D%E3%81%AF",
        },
        {
          name: "いろは - SAMURAI SPIRITS公式サイト | コマンドリスト",
          href: "https://www.snk-corp.co.jp/official/samuraispirits/img/command/24.pdf",
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
