import type { DataItem } from "../../../types"

export const reiGalford: DataItem = {
  id: "rei-galford",
  name: "ガルフォード",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "プラズマブレード",
          command: "↓↘→+斬",
        },
        {
          name: "ラッシュドッグ",
          command: "↓↙←+L",
        },
        {
          name: "マシンガンドッグ",
          command: "↓↙←+M",
        },
        {
          name: "レプリカドッグ",
          command: "↓↙←+H",
          tags: [{ name: "怒", color: 2 }],
        },
        {
          name: "オーバーヘッドクラッシュ",
          command: "↓↙←+蹴",
        },
        {
          name: "レプリカアタック（ヘッド）",
          command: "→↘↓↙←+L蹴",
        },
        {
          name: "レプリカアタック（リア）",
          command: "→↘↓↙←+M蹴",
        },
        {
          name: "イミテイトレプリカ（ヘッド）",
          command: "被ダメージ中→↘↓↙←→↘↓↙←+L蹴",
        },
        {
          name: "イミテイトレプリカ（リア）",
          command: "被ダメージ中→↘↓↙←→↘↓↙←+M蹴",
        },
        {
          name: "ストライクヘッズ",
          command: "近距離で→↓↘+斬",
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
          name: "スターダストドロップ",
          command: "空中近距離で→+蹴",
        },
      ],
    },
    {
      title: "武器飛ばし必殺技",
      titleColor: 2,
      skills: [
        {
          name: "メガプラズマファクター",
          command: "↓↘→+MH",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "ジャスティスインパルス・エックス",
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
          name: "SAMURAI SPIRITS ガルフォード - 究極攻略最前線",
          href: "https://gamers-high.com/samurai-spirits/character/galford.html",
        },
        {
          name: "ガルフォード - SAMURAI SPIRITS user's Wiki*",
          href: "https://wikiwiki.jp/samurai2019/%E3%82%AC%E3%83%AB%E3%83%95%E3%82%A9%E3%83%BC%E3%83%89",
        },
        {
          name: "ガルフォード - SAMURAI SPIRITS公式サイト | コマンドリスト",
          href: "https://www.snk-corp.co.jp/official/samuraispirits/img/command/04.pdf",
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
