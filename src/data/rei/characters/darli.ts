import type { DataItem } from "../../../types"

export const reiDarli: DataItem = {
  id: "rei-darli",
  name: "ダーリィ・ダガー",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "波刃乗り",
          command: "↓↘→+斬",
          tags: [{ name: "怒", color: 2 }],
        },
        {
          name: "落波",
          command: "↓↙←+斬",
          notes: ["ボタン継続押しでタメ可能（2段階強化）"],
          skills: [
            {
              name: "前進",
              command: "タメ中に→",
            },
            {
              name: "キャンセル",
              command: "タメ中に←←",
            },
          ],
        },
        {
          name: "巻波",
          command: "↓↘→+蹴",
        },
        {
          name: "貫波",
          command: "近距離で↓↙←+蹴",
        },
        {
          name: "波砕き",
          command: "素手時に↓↘→+斬",
          notes: ["H版は1回分のスーパーアーマー＋G不能"],
        },
      ],
    },
    {
      title: "武器飛ばし必殺技",
      titleColor: 2,
      skills: [
        {
          name: "抉り波",
          command: "↓↘→+MH",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "崩し波",
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
          name: "SAMURAI SPIRITS ダーリィ・ダガー - 究極攻略最前線",
          href: "https://gamers-high.com/samurai-spirits/character/darli.html",
        },
        {
          name: "ダーリィ・ダガー - SAMURAI SPIRITS user's Wiki*",
          href: "https://wikiwiki.jp/samurai2019/%E3%83%80%E3%83%BC%E3%83%AA%E3%82%A3%E3%83%BB%E3%83%80%E3%82%AC%E3%83%BC",
        },
        {
          name: "ダーリィ・ダガー - SAMURAI SPIRITS公式サイト | コマンドリスト",
          href: "https://www.snk-corp.co.jp/official/samuraispirits/img/command/15.pdf",
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
