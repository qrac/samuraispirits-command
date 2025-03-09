import type { DataItem } from "../../../types"

export const reiWuRuixiang: DataItem = {
  id: "rei-wu-ruixiang",
  name: "呉瑞香",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "玄武 -排山倒海-",
          command: "↓↘→+斬",
        },
        {
          name: "朱雀 -三昧真火-",
          command: "↓↙←+斬",
          tags: [{ name: "怒", color: 2 }],
        },
        {
          name: "白虎 -天羅地網-",
          command: "→↓↘+斬",
        },
        {
          name: "青龍 -星馳電掣-",
          command: "↓↓+斬",
        },
        {
          name: "麒麟 -石破天驚-",
          command: "←↓↙+蹴",
          notes: ["上中段当て身 / 飛び道具反射"],
        },
      ],
    },
    {
      title: "武器飛ばし必殺技",
      titleColor: 2,
      skills: [
        {
          name: "秘術・九頭竜掌",
          command: "↓↘→+MH",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "黄竜顕現・開天闢地",
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
          name: "SAMURAI SPIRITS 呉瑞香 - 究極攻略最前線",
          href: "https://gamers-high.com/samurai-spirits/character/wu-ruixiang.html",
        },
        {
          name: "呉瑞香 - SAMURAI SPIRITS user's Wiki*",
          href: "https://wikiwiki.jp/samurai2019/%E5%91%89%E7%91%9E%E9%A6%99",
        },
        {
          name: "呉瑞香 - SAMURAI SPIRITS公式サイト | コマンドリスト",
          href: "https://www.snk-corp.co.jp/official/samuraispirits/img/command/16.pdf",
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
