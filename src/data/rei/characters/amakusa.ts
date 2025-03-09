import type { DataItem } from "../../../types"

export const reiAmakusa: DataItem = {
  id: "rei-amakusa",
  name: "天草四郎時貞",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "死霊刃",
          command: "↓↘→+斬",
          tags: [{ name: "怒", color: 2 }],
        },
        {
          name: "天照封凰拏",
          command: "↓↙←+斬",
        },
        {
          name: "汝、暗転入滅せよ",
          command: "→↓↘+斬",
          notes: ["空中停滞時から飛び道具無敵"],
          skills: [
            {
              name: "汝、暗転入滅せよ（攻撃）",
              command: "斬",
            },
            {
              name: "汝、暗転入滅せよ（降下）",
              command: "蹴",
            },
          ],
        },
        {
          name: "逢魔刻",
          command: "↓↘→+蹴 or ↓↙←+蹴",
          notes: ["飛び道具無敵・秘奥義キャンセル可"],
        },
        {
          name: "戒烈掌",
          command: "→↓↘+蹴",
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
          name: "汝 懺悔せよ　我 滅罪せん",
          command: "↓↘→+MH",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "汝 贖罪せよ　我 滅罪せん",
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
          name: "SAMURAI SPIRITS 天草四郎時貞 - 究極攻略最前線",
          href: "https://gamers-high.com/samurai-spirits/character/amakusa.html",
        },
        {
          name: "天草四郎時貞 - SAMURAI SPIRITS user's Wiki*",
          href: "https://wikiwiki.jp/samurai2019/%E5%A4%A9%E8%8D%89%E5%9B%9B%E9%83%8E%E6%99%82%E8%B2%9E",
        },
        {
          name: "天草四郎時貞 - SAMURAI SPIRITS公式サイト | コマンドリスト",
          href: "https://www.snk-corp.co.jp/official/samuraispirits/img/command/29.pdf",
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
