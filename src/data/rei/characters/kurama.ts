import type { DataItem } from "../../../types"

export const reiKurama: DataItem = {
  id: "rei-kurama",
  name: "鞍馬夜叉丸",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "凩",
          command: "空中で↓↙←+斬",
          notes: ["飛び道具貫通"],
          tags: [{ name: "怒", color: 2 }],
        },
        {
          name: "青嵐",
          command: "↓↘→+斬（空中も可）",
          tags: [{ name: "怒", color: 2 }],
        },
        {
          name: "雁渡",
          command: "→↓↘+斬",
          tags: [{ name: "怒", color: 2 }],
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "二段飛び",
          command: "ジャンプ頂点付近で↖ or ↑ or ↗",
          notes: ["凩後も可"],
        },
      ],
    },
    {
      title: "武器飛ばし必殺技",
      titleColor: 2,
      skills: [
        {
          name: "天狗嵐 黒羽",
          command: "↓↘→+MH",
          notes: ["怒り爆発時に弾数増加"],
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "暴風 韋駄天",
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
          name: "SAMURAI SPIRITS 鞍馬夜叉丸 - 究極攻略最前線",
          href: "https://gamers-high.com/samurai-spirits/character/yashamaru.html",
        },
        {
          name: "鞍馬夜叉丸 - SAMURAI SPIRITS user's Wiki*",
          href: "https://wikiwiki.jp/samurai2019/%E9%9E%8D%E9%A6%AC%E5%A4%9C%E5%8F%89%E4%B8%B8",
        },
        {
          name: "鞍馬夜叉丸 - SAMURAI SPIRITS公式サイト | コマンドリスト",
          href: "https://www.snk-corp.co.jp/official/samuraispirits/img/command/14.pdf",
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
