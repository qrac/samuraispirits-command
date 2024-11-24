import type { DataItem } from "../../../types"

export const kenNakoruru: DataItem = {
  id: "ken-nakoruru",
  name: "ナコルル",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "アンヌ ムツベ",
          command: "←↙↓+斬",
        },
        {
          name: "レラ ムツベ",
          command: "↓↘→+斬",
        },
        {
          name: "カムイ リㇺセ",
          command: "←↓↙+斬",
          skills: [
            {
              name: "追加攻撃",
              command: "斬",
            },
          ],
        },
        {
          name: "アムベヤトロ",
          command: "↓↙←+斬",
        },
        {
          name: "鷹につかまる",
          command: "↓↙←+D",
          skills: [
            {
              name: "鷹から降りる",
              command: "↙ or ↓ or ↘+D",
            },
            {
              name: "鷹から飛ぶ",
              command: "↑ or ↗+D",
            },
            {
              name: "鷹つかまり攻撃",
              command: "斬",
            },
            {
              name: "ヤトロポック",
              command: "↓↘→+斬",
            },
            {
              name: "シチカプ アイ",
              command: "↓↙←+斬",
            },
            {
              name: "カムイ ムツベ",
              command: "↗ or → or ↘+BC",
            },
          ],
        },
        {
          name: "トゥルセ サンペ キク ムツベ",
          command: "近距離で→↘↓↙←→+C",
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
          name: "アペフチ カムイ リㇺセ【真】",
          command: "↘↓↙←→↓↘+BC",
        },
        {
          name: "アペフチ カムイ リㇺセ【剣】",
          command: "↓↘→+BC",
        },
      ],
    },
    {
      title: "武器飛ばし技・武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "エレルㇱ カムイ リㇺセ",
          command: "↓↘→+AB",
        },
      ],
    },
  ],
}
