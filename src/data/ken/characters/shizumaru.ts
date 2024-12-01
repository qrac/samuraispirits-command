import type { DataItem } from "../../../types"

export const kenShizumaru: DataItem = {
  id: "ken-shizumaru",
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
        },
        {
          name: "緋刀流 五月雨斬り",
          command: "↓↙←+斬",
        },
        {
          name: "緋刀流 氷雨返し",
          command: "↓↘→+D",
        },
        {
          name: "緋刀流 冷雨",
          command: "←↓↙+A",
          skills: [
            {
              name: "緋刀流 村雨",
              command: "←↓↙+B",
            },
            {
              name: "緋刀流 地雨",
              command: "←↓↙+C",
            },
          ],
        },
        {
          name: "緋刀流 時雨",
          command: "空中で↓+D",
        },
        {
          name: "緋刀流 小雨",
          command: "空中で↑+斬",
          skills: [
            {
              name: "緋刀流 雷雨",
              command: "AB",
            },
          ],
        },
        {
          name: "緋刀流 真・雨流れ狂落斬",
          command: "いずれかのボタン継続押し後離す",
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
          name: "三角降り",
          command: "空中画面端で↘",
        },
        {
          name: "特殊技",
          command: "空中で↓+C",
        },
        {
          name: "ぬいぐるみ変化【真】",
          command: "→↘↓↙←→←+E",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "緋刀流 暴雨円殺陣【真】",
          command: "→↓↘→↓↘+BC",
        },
        {
          name: "緋刀流 暴雨円殺陣【剣】",
          command: "↓↘→+BC",
        },
      ],
    },
    {
      title: "武器飛ばし技・武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "緋刀流禁じ手 暴雨狂風斬",
          command: "↓↘→+AB",
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "緋雨閑丸 - サムライスピリッツ天下一剣客伝攻略 - Seesaa Wiki",
          href: "https://seesaawiki.jp/w/givingleaf/d/%c8%ec%b1%ab%b4%d7%b4%dd",
        },
        {
          name: "緋雨閑丸 - キャラクターとコマンドリスト | 剣サム | 明鏡止水｡◇ﾟ in 雨峠",
          href: "http://amtug.html.xdomain.jp/meikyo/kenkaku/waza.htm#zan",
        },
      ],
    },
    /*{
      title: "もっと詳しい動画",
      links: [
        {
          name: "",
          href: "https://youtu.be/xxx",
        },
      ],
    },*/
  ],
}
