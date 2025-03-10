import type { DataItem } from "../../../types"

export const reiEarthquake: DataItem = {
  id: "rei-earthquake",
  name: "アースクェイク",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "ファットブレス",
          command: "↓↙←+斬",
        },
        {
          name: "ファットチェーンソー",
          command: "→+斬連打",
          tags: [{ name: "怒", color: 2 }],
        },
        {
          name: "ファットバウンド",
          command: "空中で↓+斬",
        },
        {
          name: "ファットレプリカアタック",
          command: "→↘↓↙←+蹴",
        },
        {
          name: "ファットボンバー",
          command: "近距離で↓↘→+蹴",
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
          name: "アースガッデム",
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
          name: "アースクライシス",
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
          name: "SAMURAI SPIRITS アースクェイク - 究極攻略最前線",
          href: "https://gamers-high.com/samurai-spirits/character/earthquake.html",
        },
        {
          name: "アースクェイク - SAMURAI SPIRITS user's Wiki*",
          href: "https://wikiwiki.jp/samurai2019/%E3%82%A2%E3%83%BC%E3%82%B9%E3%82%AF%E3%82%A8%E3%82%A4%E3%82%AF",
        },
        {
          name: "アースクェイク - SAMURAI SPIRITS公式サイト | コマンドリスト",
          href: "https://www.snk-corp.co.jp/official/samuraispirits/img/command/11.pdf",
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
