import type { DataItem } from "../../../types"

export const kenAndrew: DataItem = {
  id: "ken-andrew",
  name: "アンドリュー",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "イーグルアロー",
          command: "↓↘→+斬",
        },
        {
          name: "イーグルブレイク",
          command: "↓↙←+斬",
        },
        {
          name: "イーグルクロス",
          command: "イーグルアローにイーグルブレイクを重ねる",
        },
        {
          name: "ライジングスター",
          command: "→↓↘+斬",
          skills: [
            {
              name: "シューティングスター",
              command: "→+斬",
            },
          ],
        },
        {
          name: "スマートボム",
          command: "←↓↙+斬",
        },
        {
          name: "ブルーアイ",
          command: "↓↙←+D",
        },
        {
          name: "グランドキャノン",
          command: "→↘↓↙←→+C",
          skills: [
            {
              name: "追加攻撃",
              command: "斬",
              notes: ["回数はブルーアイを当てた回数+3 / 上限は16"],
            },
          ],
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "特殊技",
          command: "→+B",
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
          name: "ゴールドラッシュ【真】",
          command: "↓↙←↙→+BC",
        },
        {
          name: "ゴールドラッシュ【剣】",
          command: "↓↘→+BC",
        },
      ],
    },
    {
      title: "武器飛ばし技・武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "スタチューオブリバティ",
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
          name: "アンドリュー - サムライスピリッツ天下一剣客伝攻略 - Seesaa Wiki",
          href: "https://seesaawiki.jp/w/givingleaf/d/%a5%a2%a5%f3%a5%c9%a5%ea%a5%e5%a1%bc",
        },
        {
          name: "アンドリュー - キャラクターとコマンドリスト | 剣サム | 明鏡止水｡◇ﾟ in 雨峠",
          href: "http://amtug.html.xdomain.jp/meikyo/kenkaku/waza.htm#ken",
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
