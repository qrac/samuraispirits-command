import type { DataItem } from "../../../types"

export const zerospRera: DataItem = {
  id: "zerosp-rera",
  name: "レラ",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "狼に乗る",
          command: "↓↙←+C",
          skills: [
            {
              name: "狼から降りる",
              command: "レバー+C",
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
                  command: "レバー上下以外+C",
                },
              ],
            },
            {
              name: "カント シキテ",
              command: "→↓↘+斬",
              skills: [
                {
                  name: "分離攻撃",
                  command: "レバー上下以外+C",
                },
              ],
            },
            {
              name: "イメル シキテ",
              command: "空中で↓↘→+斬",
              skills: [
                {
                  name: "分離攻撃",
                  command: "レバー上下以外+C",
                },
              ],
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
          command: "空中画面端で↗ or → or ↘",
        },
        {
          name: "カムイ フㇺ ケスㇷ゚",
          command: "空中で↙ or ↓ or ↘+C",
        },
        {
          name: "レラ キシマ テㇰ",
          command: "空中近距離で↙ or ↓ or ↘+C",
        },
      ],
    },
    {
      title: "武器飛ばし技",
      titleColor: 2,
      skills: [
        {
          name: "ヌペキ カムイ シキテ",
          command: "↓↘→+CD",
          notes: ["狼乗り中でも使用可能"],
        },
      ],
    },
    {
      title: "絶命奥義",
      titleColor: 2,
      skills: [
        {
          name: "イルスカ エムㇱ ネワ シキテ",
          command: "↓↙←+CD",
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "キャラ別攻略 レラ | 零SP | 明鏡止水｡◇ﾟ in 雨峠",
          href: "https://amatoge.static.jp/meikyo/zerosp/character/22rera.htm",
        },
        {
          name: "変更点～レラ～ サムライスピリッツ零SPECIAL - ぽんしゃぶ弐号",
          href: "https://amatoge.static.jp/meikyo/zerosp/character/22rera.htm",
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
