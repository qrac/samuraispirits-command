import type { DataItem } from "../../../types"

export const zeroNakoruru: DataItem = {
  id: "zero-nakoruru",
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
              command: "斬連打",
            },
          ],
        },
        {
          name: "アムベヤトロ",
          command: "↓↙←+斬",
        },
        {
          name: "鷹につかまる",
          command: "↓↙←+C",
          skills: [
            {
              name: "鷹から降りる",
              command: "↙ or ↓ or ↘+C",
            },
            {
              name: "鷹つかまり攻撃",
              command: "斬",
            },
            {
              name: "カムイ ムツベ",
              command: "BC同時押し",
            },
          ],
        },
        {
          name: "アペフチ カムイ リㇺセ",
          command: "素手時↘↓↙←→↓↘+BC同時押し",
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
          command: "空中で↓+C",
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
          name: "エレルㇱ カムイ リㇺセ",
          command: "↓↘→+CD同時押し",
        },
      ],
    },
  ],
}
