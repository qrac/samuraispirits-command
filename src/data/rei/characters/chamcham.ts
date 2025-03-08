import type { DataItem } from "../../../types"

export const reiChamcham: DataItem = {
  id: "rei-chamcham",
  name: "チャムチャム",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "横に投げるンだゾ！",
          command: "↓↘→+斬",
          tags: [{ name: "怒", color: 2 }],
        },
        {
          name: "上に投げるンだゾ！",
          command: "↓↙←+斬",
          tags: [{ name: "怒", color: 2 }],
        },
        {
          name: "つかまえるゾ！",
          command: "→↓↘+斬",
          skills: [
            {
              name: "顔引っかくゾ！",
              command: "L or H",
            },
            {
              name: "背中引っかくゾ！",
              command: "蹴",
            },
            {
              name: "上から叩くゾ！",
              command: "M",
            },
          ],
        },
        {
          name: "飛び込むゾ！",
          command: "↓↘→+蹴",
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
          name: "もぅ許さないンだからな！",
          command: "↓↘→+MH",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "とっておきの技だゾ！",
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
          name: "SAMURAI SPIRITS チャムチャム - 究極攻略最前線",
          href: "https://gamers-high.com/samurai-spirits/character/chamcham.html",
        },
        {
          name: "チャムチャム - SAMURAI SPIRITS user's Wiki*",
          href: "https://wikiwiki.jp/samurai2019/%E3%83%81%E3%83%A3%E3%83%A0%E3%83%81%E3%83%A3%E3%83%A0",
        },
        {
          name: "チャムチャム - SAMURAI SPIRITS公式サイト | コマンドリスト",
          href: "https://www.snk-corp.co.jp/official/samuraispirits/img/command/27.pdf",
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
