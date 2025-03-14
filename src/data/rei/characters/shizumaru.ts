import type { DataItem } from "../../../types"

export const reiShizumaru: DataItem = {
  id: "rei-shizumaru",
  name: "緋雨閑丸",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "緋刀流 霧雨刃",
          command: "↓↘→+斬",
        },
        {
          name: "緋刀流 梅雨円殺陣",
          command: "→↓↘+斬",
          tags: [{ name: "怒", color: 2 }],
        },
        {
          name: "緋刀流 五月雨斬り",
          command: "↓↙←+斬",
        },
        {
          name: "緋刀流 氷雨返し",
          command: "↓↘→+蹴",
          notes: ["飛び道具反射"],
        },
        {
          name: "緋刀流 時雨",
          command: "空中で↓+蹴",
        },
        {
          name: "緋刀流 小雨",
          command: "空中で↑+斬",
          skills: [
            {
              name: "移動",
              command: "← or →",
            },
            {
              name: "解除",
              command: "↙ or ↓ or ↘",
            },
            {
              name: "緋刀流 雷雨",
              command: "MH",
            },
          ],
        },
        {
          name: "緋刀流 真・雨流れ狂落斬",
          command: "斬継続押し後離す",
          notes: [
            "5段階タメ（2秒・4秒・6秒・20秒・80秒） / 段階で無敵増加 / 5段目は突進時無敵",
          ],
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
          name: "緋刀流禁じ手 暴雨狂風斬",
          command: "↓↘→+MH",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "鬼の記憶・天泣",
          command: "→←↙↓↘→+H蹴",
          notes: ["飛び道具貫通"],
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "SAMURAI SPIRITS 緋雨閑丸 - 究極攻略最前線",
          href: "https://gamers-high.com/samurai-spirits/character/shizumaru.html",
        },
        {
          name: "緋雨閑丸 - SAMURAI SPIRITS user's Wiki*",
          href: "https://wikiwiki.jp/samurai2019/%E7%B7%8B%E9%9B%A8%E9%96%91%E4%B8%B8",
        },
        {
          name: "緋雨閑丸 - SAMURAI SPIRITS公式サイト | コマンドリスト",
          href: "https://www.snk-corp.co.jp/official/samuraispirits/img/command/18.pdf",
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
