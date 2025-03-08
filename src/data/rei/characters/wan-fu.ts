import type { DataItem } from "../../../types"

export const reiWanFu: DataItem = {
  id: "rei-wan-fu",
  name: "王虎",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "真気功爆転法",
          command: "↓↙←+斬（空中も可）",
        },
        {
          name: "気功旋風撃",
          command: "→↓↘+斬",
          tags: [{ name: "怒", color: 2 }],
        },
        {
          name: "気功大撲殺",
          command: "↓↘→+斬",
        },
        {
          name: "怒髪柱撃",
          command: "↓↙←+蹴",
        },
        {
          name: "気功肉弾砲",
          command: "素手時に近距離で↓↘→+蹴",
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "屈み歩き",
          command: "↙ or ↘",
        },
      ],
    },
    {
      title: "武器飛ばし必殺技",
      titleColor: 2,
      skills: [
        {
          name: "気功大爆天",
          command: "↓↘→+MH",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "真気功剛裂破",
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
          name: "SAMURAI SPIRITS 王虎 - 究極攻略最前線",
          href: "https://gamers-high.com/samurai-spirits/character/wan-fu.html",
        },
        {
          name: "王虎 - SAMURAI SPIRITS user's Wiki*",
          href: "https://wikiwiki.jp/samurai2019/%E7%8E%8B%E8%99%8E",
        },
        {
          name: "王虎 - SAMURAI SPIRITS公式サイト | コマンドリスト",
          href: "https://www.snk-corp.co.jp/official/samuraispirits/img/command/21.pdf",
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
