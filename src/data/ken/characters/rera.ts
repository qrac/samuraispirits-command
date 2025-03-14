import type { DataItem } from "../../../types"

export const kenRera: DataItem = {
  id: "ken-rera",
  name: "レラ",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "狼に乗る",
          command: "↓↙←+D",
          skills: [
            {
              name: "狼から降りる",
              command: "レバー+D",
            },
            {
              name: "狼乗り攻撃",
              command: "斬",
            },
            {
              name: "メㇽ シキテ",
              command: "←↙↓+斬",
              skills: [
                {
                  name: "分離攻撃",
                  command: "レバー上下以外+D",
                },
                {
                  name: "ホロケウ ポック",
                  command: "↓↙←+斬",
                },
              ],
            },
            {
              name: "カント シキテ",
              command: "→↓↘+斬",
              skills: [
                {
                  name: "分離攻撃",
                  command: "レバー上下以外+D",
                },
                {
                  name: "ホロケウ ポック",
                  command: "↓↙←+斬",
                },
              ],
            },
            {
              name: "イメル シキテ",
              command: "空中で↓↘→+斬",
              skills: [
                {
                  name: "分離攻撃",
                  command: "レバー上下以外+D",
                },
                {
                  name: "ホロケウ ポック",
                  command: "↓↙←+斬",
                },
              ],
            },
            {
              name: "ホロケウ ポック",
              command: "↓↙←+斬（空中も可）",
            },
          ],
        },
        {
          name: "カムイ リㇺセ",
          command: "←↓↙+斬",
          skills: [
            {
              name: "追加攻撃",
              command: "斬",
            },
            {
              name: "狼に乗る",
              command: "D",
            },
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
        {
          name: "三角降り",
          command: "空中画面端で↘",
        },
        {
          name: "カムイ フㇺ ケスㇷ゚",
          command: "空中で↙ or ↓ or ↘+D",
        },
        {
          name: "レラ キシマ テㇰ",
          command: "空中近距離で← or →+D",
        },
        {
          name: "特殊技",
          command: "↘+B",
        },
        {
          name: "ぬいぐるみ変化【真】",
          command: "↘↓↙←↓↙+E",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "キムン カムイ シキテ【真】",
          command: "狼乗り中に←↙↓↘→↓↘+BC",
        },
        {
          name: "キムン カムイ シキテ【剣】",
          command: "狼乗り中に↓↘→+BC",
        },
      ],
    },
    {
      title: "武器飛ばし技・武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "ヌペキ カムイ シキテ",
          command: "↓↘→+AB",
          notes: ["狼乗り中でも使用可能"],
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "レラ - サムライスピリッツ天下一剣客伝攻略 - Seesaa Wiki",
          href: "https://seesaawiki.jp/w/givingleaf/d/%a5%ec%a5%e9",
        },
        {
          name: "レラ - キャラクターとコマンドリスト | 剣サム | 明鏡止水｡◇ﾟ in 雨峠",
          href: "https://amatoge.static.jp/meikyo/kenkaku/waza.htm#zero-rera",
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
